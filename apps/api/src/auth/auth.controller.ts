import {
  Controller,
  Get,
  Request,
  Post,
  Delete,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/sign-in')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('auth/sign-out')
  async logout() {
    return { data: 'ok' };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @Get('hello')
  // hello(@Request() req) {
  //   return "HOLA";
  // }
}
