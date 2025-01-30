import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { File } from '@prisma/client';
import {
  CreateFile,
  FilesRepository,
} from '../../contracts/contract-files-repository';

@Injectable()
export class PrismaFilesRepository implements FilesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateFile): Promise<File> {
    return this.prismaService.file.create({ data });
  }

  async findById(id: string): Promise<File | null> {
    return this.prismaService.file.findUnique({
      where: { id },
    });
  }

  async findMany(): Promise<File[]> {
    return await this.prismaService.file.findMany();
  }

  async findManyByTaskId(id: string): Promise<File[]> {
    return await this.prismaService.file.findMany({
      where: {
        taskId: id,
      },
    });
  }
}
