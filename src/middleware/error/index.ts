import { NextFunction } from 'express';
import { ApiRequest, ApiResponse } from 'src/common/interfaces';
import { BaseError } from 'src/utils/errors/error';

export const errorHandlerMiddleWare = (err: BaseError, req: ApiRequest, res: ApiResponse, next: NextFunction): void => {
  if (res.headersSent) {
    next(err); return;
  }

  const { code, message, title } = err;
  res.status(err.code).send({ code, message, title });
};
