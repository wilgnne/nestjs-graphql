import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';

import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

@Module({
  imports: [PrismaModule],
  providers: [TasksResolver, TasksService],
})
export class TasksModule {}
