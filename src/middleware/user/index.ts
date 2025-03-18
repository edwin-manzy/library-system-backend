import { NextFunction } from 'express';
import { ApiRequest, ApiResponse } from 'src/common/interfaces';
import * as UserService from 'src/services/user';
import { decodeToken } from 'src/utils/helpers/common';
import { Types } from 'mongoose';
import { SafeUser } from 'src/common/interfaces/user';

export const userAuthMiddleWare = async (req: ApiRequest,
  res: ApiResponse, next: NextFunction): Promise<void> => {
  const token = req.cookies.user_info as string;
  if (token) {
    const jwt = decodeToken(token) as {id: string};
    const user = await UserService.getUserById(new Types.ObjectId(jwt.id))
      .catch((err: unknown) => {
        throw err;
      });
    if (user) {
      const { name, _id, type } = user;
      const id = _id as string;
      const safeUser: SafeUser = {
        name,
        id,
        type
      };

      req.user = safeUser;
    }
  }
  next();
};
