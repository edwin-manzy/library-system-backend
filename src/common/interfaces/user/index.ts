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