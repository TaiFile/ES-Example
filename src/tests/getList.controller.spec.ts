import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';
import { ListListsController } from '../http/controllers/list-lists.controller';
import { ListListsService } from '../services/list-lists.service';

describe('ListListController', () => {
  let app: INestApplication;

  const mockListListsService = {
    execute: jest.fn().mockResolvedValue({
      lists: [
        { id: '1', title: 'Test List 1' },
        { id: '2', title: 'Test List 2' },
      ],
    }),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ListListsController],
      providers: [
        { provide: ListListsService, useValue: mockListListsService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('should get All lists', async () => {
    const response = await request(app.getHttpServer())
      .get('/lists')
      .expect(200);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: '1', title: 'Test List 1' },
      { id: '2', title: 'Test List 2' },
    ]);
  });
});
