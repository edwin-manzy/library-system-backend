import {config} from 'dotenv';
import mongoose from 'mongoose';
import { isEmail } from 'src/utils/validators';
import * as DatabaseUtil from 'src/utils/db/connect';
import * as UserService from 'src/services/user';
import readlineSync, { BasicOptions } from 'readline-sync';
import { USER_TYPES } from 'src/common/const/user';
import path from 'path';

config({
  path: path.resolve(__dirname, '../../.env')
});

const inputReader = (question: string, name: string, validator?: (n: string) => boolean, options?: BasicOptions): string => {
  const value = readlineSync.question(question, options);
  if (validator && validator(value)) {
    return value.trim();
  }
  return inputReader(question, name, validator, options);
};

export const addUser = async () => {
  await DatabaseUtil.connectToMongoose();
  const name = inputReader('Enter your name: ', 'name', (n) => n.length > 4);
  const email = inputReader('Enter your email: ', 'email', isEmail);
  const password = inputReader('Enter your password, must be more than 5 character: ', 'password', (n) => n.length > 4);
  const typeIndex = readlineSync.keyInSelect(Object.values(USER_TYPES), 'Select your user type: ', { cancel: false });
  const type = Object.keys(USER_TYPES)[typeIndex];
  await UserService.createUser({ name, email, type }, password);
  console.log('User created successfully');
}

console.log('Welcome to the user creation process');
try {
  addUser().then(() => {
    mongoose.connection.close();
  })
} catch (error) {
  console.error(error);
  mongoose.connection.close();
}



