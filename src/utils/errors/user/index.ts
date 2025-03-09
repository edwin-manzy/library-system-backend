import { BaseError } from 'src/utils/errors/error';

export class UserUnAuthorizedError extends BaseError {
  constructor(message: string = 'Un Authorized request') {
    super('UnAuthorized', message, 401);
  }
}
