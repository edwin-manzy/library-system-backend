import { ConfigEnvVariables, FeatureFlagMap } from 'src/common/interfaces';
import { SafeUser } from 'src/common/interfaces/user';

declare global {
  namespace Express {
    interface Request {
      user?: SafeUser;
      envVariables: ConfigEnvVariables,
      features: FeatureFlagMap,
      cookies?: {
        [key: string]: string
      }
    }
  }

  interface Error {
    message: string;
    status: number;
  }
}
