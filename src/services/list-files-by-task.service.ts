import { Injectable } from '@nestjs/common';
import { File } from '@prisma/client';
import { TasksRepository } from '../database/contracts/contract-tasks-repository';
import { FilesRepository } from 'src/database/contracts/contract-files-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

type ListFilesByTaskServiceRequest = {
  id: string;
};

type ListFilesByTaskServiceResponse = {
  files: File[];
};

@Injectable()
export class ListFilesByTaskService {
  constructor(
    private tasksRepository: TasksRepository,
    private filesRepository: FilesRepository,
  ) {}

  async execute({
    id,
  }: ListFilesByTaskServiceRequest): Promise<ListFilesByTaskServiceResponse> {
    const task = await this.tasksRepository.findById(id);
    if (!task) {
      throw new ResourceNotFoundError('Task');
    }

    const files = await this.filesRepository.findManyByTaskId(id);

    return {
      files,
    };
  }
}
