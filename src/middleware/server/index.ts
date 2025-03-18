import { NextFunction } from 'express';

import mongoose from 'mongoose';
import { FEATURE_FLAG_NAMES } from 'src/common/const/feature-flag';
import { ApiRequest, ApiResponse } from 'src/common/interfaces';

export const OfflineHandler = (req: ApiRequest, res: ApiResponse, next: NextFunction): void => {
  if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected ||
    req.features[FEATURE_FLAG_NAMES.FEATURE_SERVER_OFFLINE].enabled
  ) {
    res.status(503).send('Service unavailable, try again later');
    return;
  }
  next();
};
