import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from '../prisma/prisma.module';

import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

describe('TasksResolver', () => {
  let resolver: TasksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [TasksResolver, TasksService],
    }).compile();

    resolver = module.get<TasksResolver>(TasksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should be return a list of tasks', async () => {
    const tasks = await resolver.tasks();
    expect(tasks).toBeInstanceOf(Array);
  });

  it('should be create a new task', async () => {
    const task = await resolver.createTask('new task');

    expect(task.id).toBeDefined();
    expect(task.description).toBe('new task');
  });
});
