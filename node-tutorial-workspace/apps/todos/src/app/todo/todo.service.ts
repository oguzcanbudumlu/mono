import { Injectable } from '@nestjs/common';
import { Todo } from '@node-tutorial-workspace/data';

const todos: Todo[] = [
  { message: 'Take out trash', done: false },
  { message: 'Continue using Nx', done: false },
];

@Injectable()
export class TodoService {
  getTodos(): Todo[] {
    return todos;
  }
}
