import mongoose from 'mongoose';
import { config } from 'dotenv';

import { app } from './app';
import { getEnvVariables, validateEnvVariables } from './utils/helpers/config';
import { CONFIG_ENV_VAR_NAMES } from './common/const/config';
import * as FeatureFlagService from './services/feature-flags';

config();

const [
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  SERVER_PORT,
  SERVER_HOST
] = getEnvVariables(
  CONFIG_ENV_VAR_NAMES.DATABASE_NAME,
  CONFIG_ENV_VAR_NAMES.DATABASE_PORT,
  CONFIG_ENV_VAR_NAMES.DATABASE_HOST,
  CONFIG_ENV_VAR_NAMES.DATABASE_USER,
  CONFIG_ENV_VAR_NAMES.DATABASE_PASSWORD,
  CONFIG_ENV_VAR_NAMES.SERVER_PORT,
  CONFIG_ENV_VAR_NAMES.SERVER_HOST
);

const main = async (): Promise<void> => {
  try {
    validateEnvVariables();

    let connectionString = 'mongodb://';
    if (DATABASE_USER && DATABASE_PASSWORD) {
      connectionString += `${DATABASE_USER}:${DATABASE_PASSWORD}@`;
    }

    await mongoose.connect(`${connectionString}${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`);
    await FeatureFlagService.migrateFeatures();

  } catch (e) {
    console.log(e);
  }

  app.listen(Number(SERVER_PORT), SERVER_HOST, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
    }
  });
};

void main();
