import { Router } from 'express';

import { featureFlagsRouter } from './feature-flags';
import { userRouter } from './user/index';

export const libraryMainRouter = Router();

const apiRouter = Router();
apiRouter.use('/user', userRouter);
apiRouter.use('/feature-flags', featureFlagsRouter);

libraryMainRouter.use('/api', apiRouter);
