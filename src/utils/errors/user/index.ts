import { BaseError } from 'src/utils/errors/error';

export class UserUnAuthorizedError extends BaseError {
  constructor(title = 'UnAuthorized', message = 'Un Authorized request') {
    super(title, message, 401);
  }
}
