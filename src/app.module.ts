import { join } from 'path';

import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      definitions: {
        path: join(process.cwd(), '/src/graphql.schema.d.ts'),
      },
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        // requireResolversForResolveType: false,
      },
    }),
    TasksModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
