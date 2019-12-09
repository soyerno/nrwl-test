import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  administrator: String,
  name: String,
  owner: String,
  age: Number,
  breed: String,
});
