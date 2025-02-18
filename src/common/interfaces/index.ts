import { Response, Request } from "express"

export type ApiResponse = Response;

export type ApiRequest<Params = any, ResBody = any, ReqBody = any, ReqQuery = any> =
  Request<Params, ResBody, ReqBody, ReqQuery>;
