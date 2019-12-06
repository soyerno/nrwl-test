import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './interfaces/owner.interface';

@Injectable()
export class OwnersService {
  constructor(@Inject('OWNER_MODEL') private readonly ownerModel: Model<Owner>) {}

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const createdOwner = new this.ownerModel(createOwnerDto);
    await createdOwner.save();
    return createdOwner;
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerModel.find().exec();
  }

  async findById(id: string): Promise<Owner[]> {
    return await this.ownerModel.findById(id).exec();
  }

  async deleteOne(id: string): Promise<Owner[]> {
    return await this.ownerModel.findByIdAndRemove(id).exec();
  }

  async updateOne(owner: Owner): Promise<Owner[]> {
    return await this.ownerModel.findByIdAndUpdate({_id: owner._id}, owner, {new: true}).exec();
  }
}
