import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { populateEnvVariables } from './middleware/config';
import { errorHandlerMiddleWare } from './middleware/error';
import { populateFeatures } from './middleware/feature-flag';
import { OfflineHandler } from './middleware/server';
import { userAuthMiddleWare } from './middleware/user';
import { libraryMainRouter } from './routes';

export const app = express();

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(populateEnvVariables);
app.use(populateFeatures);
app.use(OfflineHandler);
app.use(userAuthMiddleWare);
app.use(libraryMainRouter);
app.use(errorHandlerMiddleWare);
