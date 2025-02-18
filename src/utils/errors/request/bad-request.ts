import { Error } from "src/utils/errors/error";

export class BadRequestError extends Error {
  constructor(message: string = '') {
    super('Bad request', message, 400);
  }
}