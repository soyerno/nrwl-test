import {
  Controller,
  Post,
  HttpStatus,
  Res,
  Body,
  Get,
  Request
} from '@nestjs/common';
import { ChatBotService } from './chatbot.service';
import { Logger } from '@nestjs/common';

@Controller('chatbot')
export class ChatBotController {
  constructor(private readonly chatBotService: ChatBotService) {}

  @Get()
  async getToken(@Request() req) {
    return this.chatBotService.getToken()
  }

  @Post()
  async startDialogue(@Res() res, @Body() data) {
    Logger.log(data);
    await this.chatBotService.sendDialogue(data, res);
  }
}
