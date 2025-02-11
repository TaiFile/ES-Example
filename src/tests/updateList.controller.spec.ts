import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { UpdateListController } from '../http/controllers/update-list.controller';
import { UpdateListService } from '../services/update-list.service';
import * as request from 'supertest';

describe('UpdateListController', () => {
  let app: INestApplication;
  const mockUpdateListService = {
    execute: jest.fn().mockResolvedValue({
      list: {
        id: '7adf4d69-3cc0-48b7-a4b0-1accd5645511',
        title: 'Test List',
      },
    }),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UpdateListController],
      providers: [
        { provide: UpdateListService, useValue: mockUpdateListService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should update a list with valid id', async () => {
    const updatePayload = { title: 'Updated List' };
    const response = await request(app.getHttpServer())
      .put('/lists/7adf4d69-3cc0-48b7-a4b0-1accd5645511')
      .send(updatePayload)
      .expect(200);

    expect(response.status).toBe(200);
  });

  it('should return 400 with wrong body', async () => {
    await request(app.getHttpServer())
      .put('/lists/7adf4d69-3cc0-48b7-a4b0-1accd5645511')
      .expect(400)
      .send({ wrongBody: 'Updated List' });
  });
});
