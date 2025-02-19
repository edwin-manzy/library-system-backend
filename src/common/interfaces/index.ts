import { Response, Request } from 'express';
import { CONFIG_ENV_VAR_NAMES } from 'src/common/const/config';
import { User } from './user';

export type ApiResponse = Response;

export interface  ApiRequest<Params = object, ResBody = object, ReqBody = object, ReqQuery = object>
  extends Request<Params, ResBody, ReqBody, ReqQuery> {
    envVariables: ConfigEnvVariables,
    user?: User
  }

export type ConfigEnvVarName = keyof typeof CONFIG_ENV_VAR_NAMES;

export type ConfigEnvVariables = Record<ConfigEnvVarName, string>
