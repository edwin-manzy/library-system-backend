import { ConfigEnvVariables, FeatureFlagMap } from 'src/common/interfaces';
import { User } from 'src/common/interfaces/user';

declare global {
  namespace Express {
    interface Request {
      user?: User,
      envVariables: ConfigEnvVariables,
      features: FeatureFlagMap
    }
  }

  interface Error {
    message: string;
    status: number;
  }
}
