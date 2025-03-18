import { getEnvVariable } from '../config';

import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';


const getPrivateKey = (function (){
  let privateKey: string = '';
  return (): string => {

    if (!privateKey) {
      const privateKeyFile = getEnvVariable('PRIVATE_KEY_NAME');
      privateKey = fs.readFileSync(path.join('src/private/', privateKeyFile), 'utf8');
    }
    return privateKey;
  };
}());

export const signToken = (data: object | string): string => {
  try{
    return jwt.sign(data, getPrivateKey(), { algorithm: 'RS256' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error('Error signing token');
  }
};


export const decodeToken = (token: string): unknown => {
  try {
    return jwt.verify(token, getPrivateKey());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error('Error decoding token');
  }
};


type MirrorArray<T extends readonly string[]> = {
  [K in T[number]]: K;
};

export const createMirror = <T extends readonly string[]>(arr: T): MirrorArray<T> => {
  return Object.fromEntries(arr.map(key => [key, key])) as MirrorArray<T>;
};
