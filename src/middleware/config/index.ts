import { NextFunction } from 'express';
import { CONFIG_ENV_VAR_NAMES } from 'src/common/const/config';
import { ApiRequest, ApiResponse, ConfigEnvVariables, ConfigEnvVarName } from 'src/common/interfaces';
import { getEnvVariable } from 'src/utils/helpers/config';

export const populateEnvVariables = (req: ApiRequest, res: ApiResponse, next: NextFunction): void => {
  const envVariables = Object.fromEntries(
    Object.values(CONFIG_ENV_VAR_NAMES).map((v: ConfigEnvVarName) => ([v, getEnvVariable(v)]))
  ) as ConfigEnvVariables;

  req.envVariables = envVariables;
  next();
};
