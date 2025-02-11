import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { CreateListController } from '../http/controllers/create-list.controller';
import { CreateListService } from '../services/create-list.service';

describe('CreateListController', () => {
  let app: INestApplication;

  // Mock do serviço para isolar o controller
  const mockCreateListService = {
    execute: jest
      .fn()
      .mockResolvedValue({ list: { id: 'list-id-123', title: 'Test List' } }),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CreateListController],
      providers: [
        { provide: CreateListService, useValue: mockCreateListService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a new list with valid payload', async () => {
    const payload = { title: 'Test List' };

    const response = await request(app.getHttpServer())
      .post('/lists')
      .send(payload)
      .expect(201);

    expect(response.body).toEqual({ id: 'list-id-123', title: 'Test List' });
    expect(mockCreateListService.execute).toHaveBeenCalledWith({
      title: 'Test List',
    });
  });

  it('should return 400 when payload is invalid', async () => {
    // Exemplo: se o payload não possuir o campo "title", o ZodValidationPipe deve retornar 400
    const invalidPayload = { wrongField: 'no title' };

    await request(app.getHttpServer())
      .post('/lists')
      .send(invalidPayload)
      .expect(400);
  });
});
