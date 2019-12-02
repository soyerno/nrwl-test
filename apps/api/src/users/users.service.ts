import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        email: 'hdesouza@vi-datec.com',
        password: '1234',
      },
      {
        userId: 2,
        email: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        email: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    Logger.log(email)
    return this.users.find(user => user.email === email);
  }
}
