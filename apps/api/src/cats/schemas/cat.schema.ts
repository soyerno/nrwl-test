import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  owner: String,
  age: Number,
  breed: String,
});
