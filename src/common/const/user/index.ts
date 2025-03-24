import { createMirror } from 'src/utils/helpers/common';

export const USER_TYPES = {
  student: 'student',
  librarian: 'librarian',
};


export const USER_LOGIN_ERRORS = createMirror([
  'EMAIL_PASSWORD_INCORRECT',
  'EMAIL_INVALID',
  'PASSWORD_INVALID'
] as const);
