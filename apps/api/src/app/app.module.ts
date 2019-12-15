import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { CatsModule } from '../cats/cats.module';
import { OwnersModule } from '../owners/owners.module';
import { ChatBotModule } from '../chatbot/chatbot.module';

@Module({
  imports: [AuthModule, UsersModule, CatsModule, OwnersModule, ChatBotModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
