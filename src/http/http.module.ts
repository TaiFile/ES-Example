import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StorageModule } from 'src/storage/storage.module';
import { CreateTaskController } from './controllers/create-task.controller';
import { CreateTaskService } from 'src/services/create-task.service';
import { DeleteTaskController } from './controllers/delete-task.controller';
import { DeleteTaskService } from 'src/services/delete-task.service';
import { ListTasksController } from './controllers/list-tasks.controller';
import { ListTasksService } from 'src/services/list-tasks.service';
import { UpdateTaskController } from './controllers/update-task.controller';
import { UpdateTaskService } from 'src/services/update-task.service';
import { CreateListService } from 'src/services/create-list.service';
import { DeleteListService } from 'src/services/delete-list.service';
import { UpdateListService } from 'src/services/update-list.service';
import { ListListsService } from 'src/services/list-lists.service';
import { CreateListController } from './controllers/create-list.controller';
import { DeleteListController } from './controllers/delete-list.controller';
import { ListListsController } from './controllers/list-lists.controller';
import { UpdateListController } from './controllers/update-list.controller';
import { UploadFileService } from 'src/services/upload-file.service';
import { UploadFileController } from './controllers/upload-file.controller';
import { DownloadFileService } from 'src/services/download-file.service';
import { DownloadFileController } from './controllers/download-file.controller';
import { ListFilesByTaskController } from './controllers/list-files-by-task.controller';
import { ListFilesByTaskService } from 'src/services/list-files-by-task.service';

@Module({
  imports: [DatabaseModule, StorageModule],
  controllers: [
    CreateTaskController,
    DeleteTaskController,
    ListTasksController,
    UpdateTaskController,
    CreateListController,
    DeleteListController,
    ListListsController,
    UpdateListController,
    UploadFileController,
    DownloadFileController,
    ListFilesByTaskController,
  ],
  providers: [
    CreateTaskService,
    DeleteTaskService,
    ListTasksService,
    UpdateTaskService,
    CreateListService,
    DeleteListService,
    ListListsService,
    UpdateListService,
    UploadFileService,
    DownloadFileService,
    ListFilesByTaskService,
  ],
})
export class HttpModule {}
