import bcrypt from 'bcrypt';
import { Query, Types } from 'mongoose';
import { USER_LOGIN_ERRORS } from 'src/common/const/user';
import { SafeUser, User, UserDocument, UserPassword } from 'src/common/interfaces/user';
import { userModel } from 'src/models/user';
import { UserUnAuthorizedError } from 'src/utils/errors/user';

export const createUser = (user: Pick<User, 'email' | 'name' | 'type'>, password: string):
  Promise<UserDocument> => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newPassword: Pick<UserPassword, 'value'> = {
      value: hashedPassword,
    };

    return userModel.create({ ...user, password: [newPassword] });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Error creating user');
  }
};

export const getUserByEmail = (email: string): Query<UserDocument | null, UserDocument> => {
  return userModel.findOne({ email }).lean();
};

export const getUserById = (id: Types.ObjectId): Query<UserDocument | null, UserDocument> => {
  return userModel.findById(id).lean();
};

export const signin = async (email: string, password: string): Promise<UserDocument> => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new UserUnAuthorizedError(
      USER_LOGIN_ERRORS.EMAIL_PASSWORD_INCORRECT, 'The email or password is incorrect.');
  }

  const encryptedPassword = user.password.find(({ active }) => active);

  if(!encryptedPassword || !bcrypt.compareSync(password, encryptedPassword.value)) {
    throw new UserUnAuthorizedError('The email or password is incorrect.');
  }

  return user;
};

export const whoAmi = (user?: SafeUser): SafeUser | undefined => {
  if (!user) {
    return;
  }

  return user;
};
