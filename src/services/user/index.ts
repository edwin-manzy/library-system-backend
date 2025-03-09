import { User, UserDocument, UserPassword } from 'src/common/interfaces/user';
import { Query } from 'mongoose';
import { userModel } from 'src/models/user';
import bcrypt from 'bcrypt';
import { UserUnAuthorizedError } from 'src/utils/errors/user';

export const createUser = (user: Omit<User, 'password'>, password: string): Promise<UserDocument> => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newPassword: UserPassword = {
      value: hashedPassword,
      date: new Date(),
      expires: false,
      active: true,
    };

    return userModel.create({ ...user, password: [newPassword] });
  } catch (error) {
    console.error(error);
    throw new Error('Error creating user');
  }
};

export const getUserByEmail = (email: string): Query<User | null, User> => {
  return userModel.findOne({ email });
};

export const signin = async (email: string, password: string): Promise<User> => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new UserUnAuthorizedError('The email or password is incorrect.');
  }

  const encryptedPassword = user.password.find(({ active }) => active);

  if(!encryptedPassword || !bcrypt.compareSync(password, encryptedPassword.value)) {
    throw new UserUnAuthorizedError('The email or password is incorrect.');
  }

  return user;
};
