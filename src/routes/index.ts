import { Router } from 'express';
import { userRouter } from './user/index';
import { errorHandlerMiddleWare } from 'src/middleware/error';

export const libraryMainRouter = Router();

const apiRouter = Router();
apiRouter.use('/user', userRouter);

libraryMainRouter.use('/api', apiRouter)
libraryMainRouter.use(errorHandlerMiddleWare);