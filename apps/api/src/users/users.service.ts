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
        email: 'mcandio@vi-datec.com',
        password: '1234',
      }
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    Logger.log(email)
    return this.users.find(user => user.email === email);
  }
}
