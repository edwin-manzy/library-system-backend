import { NextFunction } from 'express';
import { ApiRequest, ApiResponse } from 'src/common/interfaces';
import * as UserService from 'src/services/user';
import { decodeToken } from 'src/utils/helpers/common';
import { Types } from 'mongoose';

export const userAuthMiddleWare = async (req: ApiRequest, res: ApiResponse, next: NextFunction): Promise<void> => {
  const token = req.cookies.user_info as string;
  if (token) {
    const jwt = decodeToken(token) as {id: string};
    const user = await UserService.getUserById(new Types.ObjectId(jwt.id));
    if (user) {
      req.user = user;
    }
  }
  next();
};
