import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Cat[]> {
    return this.catsService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params): Promise<Cat[]> {
    return this.catsService.deleteOne(params.id);
  }

  @Put(':id')
  async updateById(@Param() params): Promise<Cat[]> {
    return this.catsService.updateOne(params.cat);
  }
}
