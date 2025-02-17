import { Router } from 'express'
import * as ServerController from 'src/controllers/server';

export const serverOfflineRouter = Router();

serverOfflineRouter.all('*', ServerController.ServerOffline)