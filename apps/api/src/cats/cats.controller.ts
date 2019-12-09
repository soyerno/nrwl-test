import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  UseGuards,
  Req,
  UnauthorizedException
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  async validateOwnership(elementId, userId) {
    const cat: Cat = await this.catsService.findById(elementId);
    if (cat.administrator != userId) {
      throw new UnauthorizedException();
    }
    return true;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Req() req, @Body() createCatDto: CreateCatDto) {
    createCatDto.administrator = req.user.userId;
    return this.catsService.create(createCatDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Req() req): Promise<Cat[]> {
    return this.catsService.findAllByUser(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getById(@Req() req, @Param() params): Promise<Cat> {
    if (await this.validateOwnership(params.id, req.user.userId)) {
      return this.catsService.findById(params.id);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteById(@Req() req, @Param() params): Promise<Cat> {
    if (await this.validateOwnership(params.id, req.user.userId)) {
      return this.catsService.deleteOne(params.id);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async updateById(@Req() req, @Param() params, @Body() cat): Promise<Cat> {
    if (await this.validateOwnership(params.id, req.user.userId)) {
      return this.catsService.updateOne(cat);
    }
  }
}
