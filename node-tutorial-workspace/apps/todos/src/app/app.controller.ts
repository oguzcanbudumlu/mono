import { Controller, Get, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private todoService: TodoService
  ) {}

  @Get('api')
  getData() {
    return this.todoService.getTodos();
  }

  @Get()
  @Render('index')
  root() {
    return {
      todos: this.getData(),
    };
  }
}
