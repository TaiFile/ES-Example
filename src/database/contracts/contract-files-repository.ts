import { File } from '@prisma/client';

export type CreateFile = {
  path: string;
  taskId: string;
};

export abstract class FilesRepository {
  abstract create: (data: CreateFile) => Promise<File>;
  abstract findById: (id: string) => Promise<File | null>;
  abstract findMany: () => Promise<File[]>;
  abstract findManyByTaskId: (id: string) => Promise<File[]>;
}
