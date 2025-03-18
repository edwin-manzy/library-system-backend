import { Document } from 'mongoose';
import { USER_TYPES } from 'src/common/const/user';

export type UserType = typeof USER_TYPES[keyof (typeof USER_TYPES)]

export interface UserPassword {
  date: Date;
  expires: boolean;
  expiresOn?: Date;
  value: string;
  active: boolean;
}

export interface User {
  name: string;
  email: string;
  password: UserPassword[];
  createdAt: Date;
  type: UserType;
}

export type UserDocument = User & Document;
export type UserPasswordDocument = UserPassword & Document;

export interface SafeUser extends Omit<User, 'password'| 'createdAt' | 'email'> {
  id: string;
}

export interface UserSignInRequestBody {
  email: string;
  password: string;
}

export interface UserSignInResponseBody {
  name: string;
  id: string;
  type: UserType
}
