import { Router } from 'express';
import * as UserController from 'src/controllers/user/index';

export const userRouter = Router();

userRouter.post('/signin', UserController.signIn);
userRouter.get('/whoami', UserController.whoami);
