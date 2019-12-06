import { Controller, Get, Post, Delete, Put, Body, Param, UseGuards } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { OwnersService } from './owners.service';
import { Owner } from './interfaces/owner.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('owners')
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownersService.create(createOwnerDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getById(@Param() params): Promise<Owner[]> {
    return this.ownersService.findById(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteById(@Param() params): Promise<Owner[]> {
    return this.ownersService.deleteOne(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async updateById(@Param() params, @Body() cat): Promise<Owner[]> {
    return this.ownersService.updateOne(cat);
  }
}
