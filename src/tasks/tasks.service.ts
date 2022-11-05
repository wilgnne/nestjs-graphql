import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  private readonly repository: Prisma.TaskDelegate<undefined>;

  constructor(prismaService: PrismaService) {
    this.repository = prismaService.task;
  }

  async createTask(description: string) {
    const task = await this.repository.create({
      data: {
        description,
      },
    });

    return task;
  }

  async all() {
    return this.repository.findMany();
  }
}
