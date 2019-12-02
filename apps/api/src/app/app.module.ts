import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RmModule } from '../rm/rm.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RmModule,
    MongooseModule.forRoot('mongodb://ec2-100-26-103-229.compute-1.amazonaws.com:27017')
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
