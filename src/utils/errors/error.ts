export class BaseError extends Error {
  public title: string = '';
  public message: string = '';
  public code: number = 404;

  constructor (title: string, message: string, code: number ) {
    super(message);
    this.code = code;
    this.message = message;
    this.title = title;
  }
}
