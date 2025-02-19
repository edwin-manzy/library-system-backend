import { ApiRequest, ApiResponse } from 'src/common/interfaces';

export const ServerOffline = (req: ApiRequest, res: ApiResponse): void => {
  res.status(503).send('Service unavailable, try again later');
};
