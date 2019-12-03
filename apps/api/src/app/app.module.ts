import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { CatsModule } from '../cats/cats.module';

@Module({
  imports: [AuthModule, UsersModule, CatsModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
