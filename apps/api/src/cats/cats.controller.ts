import { Controller, Get, Post, Delete, Put, Body, Param, UseGuards } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getById(@Param() params): Promise<Cat[]> {
    return this.catsService.findById(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteById(@Param() params): Promise<Cat[]> {
    return this.catsService.deleteOne(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async updateById(@Param() params, @Body() cat): Promise<Cat[]> {
    return this.catsService.updateOne(cat);
  }
}
