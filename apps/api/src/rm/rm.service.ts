import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Rm } from './interfaces/rm.interface';
// import { CreateCatDto } from './dto/create-rm.dto';

export interface Rm {
  name: String,
  age: Number,
  breed: String,
}

@Injectable()
export class RmService {
  constructor(@InjectModel('Rm') private readonly rmModel: Model<Rm>) {}

  // async create(createCatDto: CreateCatDto): Promise<Rm> {
  //   const createdCat = new this.catModel(createCatDto);
  //   return await createdCat.save();
  // }

  async findAll(): Promise<Rm[]> {
    return await this.rmModel.find().exec();
  }
}
