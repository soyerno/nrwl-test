import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RmController } from './rm.controller';
import { RmService } from './rm.service';
import { RmSchema } from './rm.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rm', schema: RmSchema }])],
  controllers: [RmController],
  providers: [RmService],
})
export class RmModule {}
