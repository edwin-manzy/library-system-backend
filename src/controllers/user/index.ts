import { ApiRequest, ApiResponse } from 'src/common/interfaces';
import { UserSignInRequestBody, UserSignInResponseBody } from 'src/common/interfaces/user';
import { buildSuccessfulJsonResponse, validateRequestProps } from 'src/utils/helpers';
import * as UserService from 'src/services/user';
import { TIME } from 'src/common/const';
import { signToken } from 'src/utils/helpers/common';

export const signIn = async (req: ApiRequest<void, UserSignInResponseBody, UserSignInRequestBody>, res: ApiResponse): Promise<void> => {
  validateRequestProps<UserSignInRequestBody>(req.body, 'email', 'password');

  const user = await UserService.signin(req.body.email, req.body.password);
  const { _id : id, name, type } = user;
  const token = signToken({ id });

  res.cookie('user_info', token, {
    httpOnly: true,
    maxAge: TIME.MILL_DAY,
  }).send(buildSuccessfulJsonResponse({
    name,
    type,
  }));
};

export const whoami = (req: ApiRequest, res: ApiResponse): void => {
  const user = UserService.whoAmi(req.user);
  res.send(buildSuccessfulJsonResponse({
    user
  }));
};
