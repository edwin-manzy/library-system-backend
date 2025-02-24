import express from 'express';

import { populateEnvVariables } from './middleware/config';
import { libraryMainRouter } from './routes';
import { errorHandlerMiddleWare } from './middleware/error';
import { populateFeatures } from './middleware/feature-flag';
import { OfflineHandler } from './middleware/server';

export const app = express();

app.use(express.json());
app.use(populateEnvVariables);
app.use(populateFeatures);
app.use(OfflineHandler);
app.use(libraryMainRouter);
app.use(errorHandlerMiddleWare);
