import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';
import { AuthModule } from '@node-tutorial-workspace/auth';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
