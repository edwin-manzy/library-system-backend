import { createMirror } from 'src/utils/helpers/common';

export const CONFIG_ENV_VAR_NAMES = createMirror([
  // DATABASE_VARIABLES
  'DATABASE_HOST',
  'DATABASE_NAME',
  'DATABASE_PORT',
  'DATABASE_USER',
  'DATABASE_PASSWORD',

  //SERVER
  'SERVER_PORT',
  'SERVER_HOST',

  //JSON_WEB_TOKEN
  'PRIVATE_KEY_NAME',
] as const);
