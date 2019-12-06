import * as mongoose from 'mongoose';

export const OwnerSchema = new mongoose.Schema({
  name: String,
  cats: [],
});
