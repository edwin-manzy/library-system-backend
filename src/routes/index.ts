import { Router } from 'express';
import { userRouter } from './user/index';
import { featureFlagsRouter } from './feature-flags';

export const libraryMainRouter = Router();

const apiRouter = Router();
apiRouter.use('/user', userRouter);
apiRouter.use('/feature-flags', featureFlagsRouter);

libraryMainRouter.use('/api', apiRouter);
