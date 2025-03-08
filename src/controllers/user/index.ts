import { ApiRequest, ApiResponse } from 'src/common/interfaces';
import { UserSignInRequestBody, UserSignInResponseBody } from 'src/common/interfaces/user';
import { buildSuccessfulJsonResponse, validateRequestProps } from 'src/utils/helpers';
import { TIME } from 'src/common/const';

export const signIn = (req: ApiRequest<void, UserSignInResponseBody, UserSignInRequestBody>, res: ApiResponse): void => {
  validateRequestProps<UserSignInRequestBody>(req.body, 'email', 'password');
  res.cookie('user_info', '', {
    httpOnly: true,
    maxAge: TIME.MILL_DAY,
  }).send(buildSuccessfulJsonResponse({
    name: 'edwindijas@gmail.com'
  }));
};

export const whoami = (req: ApiRequest, res: ApiResponse): void => {
  res.send('unknown');
};
