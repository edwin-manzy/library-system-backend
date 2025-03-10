import { getEnvVariable } from '../config';

import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';


export const signToken = (function () {
  let privateKey: string = '';
  return (data: object | string): string => {

    if (!privateKey) {
      const privateKeyFile = getEnvVariable('PRIVATE_KEY_NAME');
      privateKey = fs.readFileSync(path.join('src/private/', privateKeyFile), 'utf8');
    }

    try{
      return jwt.sign(data, privateKey, { algorithm: 'RS256' });
    } catch (err) {
      console.error(err);
      throw new Error('Error signing token');
    }
  };
}());


type MirrorArray<T extends readonly string[]> = {
  [K in T[number]]: K;
};

export const createMirror = <T extends readonly string[]>(arr: T): MirrorArray<T> => {
  return Object.fromEntries(arr.map(key => [key, key])) as MirrorArray<T>;
};
