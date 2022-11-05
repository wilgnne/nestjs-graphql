import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Task } from 'src/graphql.schema';
import { TasksService } from './tasks.service';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query()
  tasks() {
    return this.tasksService.all();
  }

  @Mutation()
  createTask(@Args('description') description: string) {
    return this.tasksService.createTask(description);
  }
}
