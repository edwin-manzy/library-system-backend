import { USER_TYPES } from "src/common/const/user";


export type UserType = typeof USER_TYPES[keyof (typeof USER_TYPES)]

export interface UserPassword {
  date: Date;
  expires: boolean;
  expiresOn?: Date;
  value: string;
}

export interface User {
  name: string;
  email: string;
  password: UserPassword;
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
