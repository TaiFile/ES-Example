import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ListFilesByTaskService } from '../../services/list-files-by-task.service';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import {
  ListFilesByTaskParamSchema,
  listFilesByTaskParamSchema,
} from '../schemas/task-schemas';

const paramValidationPipe = new ZodValidationPipe(listFilesByTaskParamSchema);

@Controller('/tasks/:id/files')
export class ListFilesByTaskController {
  constructor(private listFilesByTaskService: ListFilesByTaskService) {}

  @Get()
  @HttpCode(200)
  async handle(@Param(paramValidationPipe) { id }: ListFilesByTaskParamSchema) {
    const { files } = await this.listFilesByTaskService.execute({ id });

    return files;
  }
}
