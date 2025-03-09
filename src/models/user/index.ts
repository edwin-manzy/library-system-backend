import mongoose from 'mongoose';
import { USER_TYPES } from 'src/common/const/user';
import { UserDocument, UserPasswordDocument } from 'src/common/interfaces/user';

const PasswordSchema = new mongoose.Schema<UserPasswordDocument>({
  value: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  expires: {
    type: Boolean,
    required: true,
  },
  expiresOn: {
    type: Date,
  },
  active: {
    type: Boolean,
    required: true,
  }
});

const UserSchema = new mongoose.Schema<UserDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: Object.values(USER_TYPES),
  },
  password: [PasswordSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const userModel = mongoose.model('user', UserSchema);
