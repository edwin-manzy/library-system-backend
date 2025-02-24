import { Response, Request } from 'express';
import { CONFIG_ENV_VAR_NAMES } from 'src/common/const/config';
import { User } from './user';
import { FEATURE_FLAG_NAMES } from '../const/feature-flag';
import { FeatureFlag } from './feature-flag/feature-flag';

export type ApiResponse = Response;
export type ConfigEnvVarName = keyof typeof CONFIG_ENV_VAR_NAMES;
export type ConfigEnvVariables = Record<ConfigEnvVarName, string>

export type FeatureFlagNames = keyof typeof FEATURE_FLAG_NAMES;
export type FeatureFlagMap = Record<FeatureFlagNames, FeatureFlag>

export interface  ApiRequest<Params = object, ResBody = object, ReqBody = object, ReqQuery = object>
  extends Request<Params, ResBody, ReqBody, ReqQuery> {
    envVariables: ConfigEnvVariables,
    user?: User;
    features: FeatureFlagMap;
  }
