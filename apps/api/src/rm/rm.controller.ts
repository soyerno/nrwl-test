import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RmService } from './rm.service';

@Controller()
export class RmController {

  constructor(private rms: RmService){}

  // @UseGuards(AuthGuard('local'))
  @Get('rm/all')
  async findAll(@Request() req): Promise<any[]> {
    return await this.rms.findAll();
  }
}
