import { Router } from 'express';
import { userRouter } from './user/index';

export const libraryMainRouter = Router();

const apiRouter = Router();
apiRouter.use('/user', userRouter);

libraryMainRouter.use('/api', apiRouter)
