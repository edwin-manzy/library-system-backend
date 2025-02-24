import { CONFIG_ENV_VAR_NAMES } from 'src/common/const/config';
import { ConfigEnvVarName } from 'src/common/interfaces';

export const getEnvVariable = (key: ConfigEnvVarName): string => {
  if (process.env[key] === undefined) {
    throw new Error(`The system is missing key ${key}`);
  }

  return process.env[key];
};

export const getEnvVariables = (...keys: ConfigEnvVarName[]): string[] => {
  return keys.map((key: ConfigEnvVarName) => getEnvVariable(key));
};

export const validateEnvVariables = (): void => {
  getEnvVariables(...Object.values(CONFIG_ENV_VAR_NAMES));
};
