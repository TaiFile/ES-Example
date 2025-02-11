import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { DeleteListController } from '../http/controllers/delete-list.controller';
import { DeleteListService } from '../services/delete-list.service';
import { ResourceNotFoundError } from '../services/errors/resource-not-found-error';

describe('DeleteListController', () => {
  let app: INestApplication;
  const mockDeleteListService = {
    execute: jest.fn().mockResolvedValue({
      list: {
        id: '7adf4d69-3cc0-48b7-a4b0-1accd5645511',
        title: 'Test List',
      },
    }),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [DeleteListController],
      providers: [
        { provide: DeleteListService, useValue: mockDeleteListService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should delete a list with valid id', async () => {
    const response = await request(app.getHttpServer())
      .delete('/lists/7adf4d69-3cc0-48b7-a4b0-1accd5645511')
      .expect(204);

    expect(mockDeleteListService.execute).toHaveBeenCalledWith({
      id: '7adf4d69-3cc0-48b7-a4b0-1accd5645511',
    });
  });

  it('should return 404 if list is not found', async () => {
    mockDeleteListService.execute.mockRejectedValue(
      new ResourceNotFoundError('List'),
    );

    const response = await request(app.getHttpServer())
      .delete('/lists/7adf4d69-3cc0-48b7-a4b0-1accd5645511')
      .expect(404);

    expect(response.body).toEqual({
      statusCode: 404,
      message: 'List does not exist.',
    });
  });
});
