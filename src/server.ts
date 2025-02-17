import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import { libraryMainRouter } from './routes';
import { serverOfflineRouter } from './routes/server/offline';

config();

const app = express();
app.use(express.json());

const dbName = process.env['DATABASE_NAME'];
const dbPort = process.env['DATABASE_PORT'];
const dbHost = process.env['DATABASE_HOST'];

const svPort = Number(process.env['SERVER_PORT']) ?? 8080;
const svHost = process.env['SERVER_HOST'] ?? 'localhost';

const main = async (): Promise<void> => {
  try {
    await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`);
    app.use( libraryMainRouter );
  } catch (e) {
    console.log(e);
    app.use(serverOfflineRouter);
  }

  app.listen(svPort, svHost, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server is running on http://${svHost}:${svPort}`)
    }
  })
}

main();
