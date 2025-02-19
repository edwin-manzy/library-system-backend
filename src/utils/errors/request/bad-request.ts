import { BaseError } from 'src/utils/errors/error';

export class BadRequestError extends BaseError {
  constructor(message: string = '') {
    super('Bad request', message, 400);
  }
}
