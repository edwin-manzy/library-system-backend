import mongoose from 'mongoose';
import { CONFIG_ENV_VAR_NAMES } from 'src/common/const/config';

import { getEnvVariables } from '../helpers/config';

export const connectToMongoose = async (): Promise<boolean> => {
  const [
    DATABASE_NAME,
    DATABASE_PORT,
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
  ] = getEnvVariables(
    CONFIG_ENV_VAR_NAMES.DATABASE_NAME,
    CONFIG_ENV_VAR_NAMES.DATABASE_PORT,
    CONFIG_ENV_VAR_NAMES.DATABASE_HOST,
    CONFIG_ENV_VAR_NAMES.DATABASE_USER,
    CONFIG_ENV_VAR_NAMES.DATABASE_PASSWORD,
    CONFIG_ENV_VAR_NAMES.SERVER_PORT,
    CONFIG_ENV_VAR_NAMES.SERVER_HOST
  );
  try {
    let connectionString = 'mongodb://';
    if (DATABASE_USER && DATABASE_PASSWORD) {
      connectionString += `${DATABASE_USER}:${DATABASE_PASSWORD}@`;
    }

    await mongoose.connect(`${connectionString}${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`);
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return false;
  }
};
