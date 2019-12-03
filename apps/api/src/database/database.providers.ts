import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://ticmas:ticmas@cluster0-fxm1j.mongodb.net/test?retryWrites=true&w=majority'),
  },
];
