import * as mongoose from 'mongoose';

export const RmSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
