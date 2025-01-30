import { z } from 'zod';

const createTaskBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  priority: z.string(),
  finishAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/),
  listId: z.string().uuid(),
});

const updateTaskParamSchema = z.object({
  id: z.string().uuid(),
});

const updateTaskBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  priority: z.string(),
  finishAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/),
  listId: z.string().uuid(),
  isFinished: z.boolean(),
});

const deleteTaskParamSchema = z.object({
  id: z.string().uuid(),
});

const getTaskByIdParamSchema = z.object({
  id: z.string().uuid(),
});

const uploadFileParamSchema = z.object({
  id: z.string().uuid(),
});

const downloadFileParamSchema = z.object({
  id: z.string().uuid(),
});

const listFilesByTaskParamSchema = z.object({
  id: z.string().uuid(),
});

type CreateTaskBodySchema = z.infer<typeof createTaskBodySchema>;
type UpdateTaskParamSchema = z.infer<typeof updateTaskParamSchema>;
type UpdateTaskBodySchema = z.infer<typeof updateTaskBodySchema>;
type DeleteTaskParamSchema = z.infer<typeof deleteTaskParamSchema>;
type GetTaskByIdParamSchema = z.infer<typeof getTaskByIdParamSchema>;
type UploadFileParamSchema = z.infer<typeof uploadFileParamSchema>;
type DownloadFileParamSchema = z.infer<typeof downloadFileParamSchema>;
type ListFilesByTaskParamSchema = z.infer<typeof listFilesByTaskParamSchema>;

export {
  createTaskBodySchema,
  updateTaskParamSchema,
  updateTaskBodySchema,
  deleteTaskParamSchema,
  getTaskByIdParamSchema,
  uploadFileParamSchema,
  downloadFileParamSchema,
  listFilesByTaskParamSchema,
  CreateTaskBodySchema,
  UpdateTaskParamSchema,
  UpdateTaskBodySchema,
  DeleteTaskParamSchema,
  GetTaskByIdParamSchema,
  UploadFileParamSchema,
  DownloadFileParamSchema,
  ListFilesByTaskParamSchema,
};
