import { config } from 'dotenv';

import { app } from './app';
import { CONFIG_ENV_VAR_NAMES } from './common/const/config';
import * as FeatureFlagService from './services/feature-flags';
import * as DatabaseUtils from './utils/db/connect';
import { getEnvVariables, validateEnvVariables } from './utils/helpers/config';

config();

/* eslint no-console: ["error", {allow: ["error"]}] */

const [
  SERVER_PORT,
  SERVER_HOST
] = getEnvVariables(
  CONFIG_ENV_VAR_NAMES.SERVER_PORT,
  CONFIG_ENV_VAR_NAMES.SERVER_HOST
);

const main = async (): Promise<void> => {
  validateEnvVariables();
  const connected = await DatabaseUtils.connectToMongoose();
  if (connected) {
    await FeatureFlagService.migrateFeatures();
  } else {
    // eslint-disable-next-line no-console
    console.log('Failed to connect to database, server offline');
  }

  app.listen(Number(SERVER_PORT), SERVER_HOST, (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
    }
  });
};

void main();
