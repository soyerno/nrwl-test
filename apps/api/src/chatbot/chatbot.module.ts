import { Module } from '@nestjs/common';
import { ChatBotService } from './chatbot.service';
import { ChatBotController } from './chatbot.controller';

@Module({
  providers: [ChatBotService],
  controllers: [ChatBotController],
})
export class ChatBotModule {}
