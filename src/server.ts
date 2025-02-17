import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import { libraryMainRouter } from './routes';
import { serverOfflineRouter } from './routes/server/offline';

config();

const app = express();
app.use(express.json());

const {
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  SERVER_PORT,
  SERVER_HOST
} = process.env;


const main = async (): Promise<void> => {
  try {
    let connectionString = 'mongodb://';
    if (DATABASE_USER && DATABASE_PASSWORD) {
      connectionString += `${DATABASE_USER}:${DATABASE_PASSWORD}@`;
    }

    await mongoose.connect(`${connectionString}${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`);
    app.use( libraryMainRouter );
  } catch (e) {
    console.log(e);
    app.use(serverOfflineRouter);
  }

  app.listen(Number(SERVER_PORT), SERVER_HOST ?? 'localhost', (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`)
    }
  })
}

main();
