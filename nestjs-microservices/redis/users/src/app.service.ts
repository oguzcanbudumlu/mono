import { Injectable } from '@nestjs/common';

export interface User {
  id: string;
  login: string;
}

@Injectable()
export class AppService {
  users = [
    { id: '1', login: 'bob' },
    { id: '2', login: 'john' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
