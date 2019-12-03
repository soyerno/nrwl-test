import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  constructor(@Inject('CAT_MODEL') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    await createdCat.save();
    return createdCat;
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat[]> {
    return await this.catModel.findById(id).exec();
  }

  async deleteOne(id: string): Promise<Cat[]> {
    return await this.catModel.findByIdAndRemove(id).exec();
  }

  async updateOne(cat: Cat): Promise<Cat[]> {
    return await this.catModel.updateOne(cat).exec();
  }
}
