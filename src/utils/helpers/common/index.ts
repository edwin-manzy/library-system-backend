import { CONFIG_ENV_VAR_NAMES } from 'src/common/const/config';
import { getEnvVariable } from '../config';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const privateKeyFile = getEnvVariable(CONFIG_ENV_VAR_NAMES.PRIVATE_KEY_NAME);
const privateKey = fs.readFileSync(path.join('src/private/', privateKeyFile), 'utf8');

type MirrorArray<T extends readonly string[]> = {
  [K in T[number]]: K;
};

export const createMirror = <T extends readonly string[]>(arr: T): MirrorArray<T> => {
  return Object.fromEntries(arr.map(key => [key, key])) as MirrorArray<T>;
};


export const signToken = (data: object | string): string => {
  try{
    return jwt.sign(data, privateKey, { algorithm: 'RS256' });
  } catch (err) {
    console.error(err);
    throw new Error('Error signing token');
  }
};
