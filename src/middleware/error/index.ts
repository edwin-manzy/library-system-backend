import { NextFunction } from "express";
import { ApiRequest, ApiResponse } from "src/common/interfaces";
import { Error } from "src/utils/errors/error";

export const errorHandlerMiddleWare = (err: Error, req: ApiRequest, res: ApiResponse, next: NextFunction): void => {
  if (res.headersSent) {
    return next(err)
  }

  const {code, message, title } = err;
  res.status(err.code).send({ code, message, title })
}