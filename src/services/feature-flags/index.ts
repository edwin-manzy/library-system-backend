import { Query } from 'mongoose';
import { FeatureFlag } from 'src/common/interfaces/feature-flag/feature-flag';
import { featureFlagModel } from 'src/models/feature-flag';

export const getFeatureFlags = (): Query<FeatureFlag[], FeatureFlag> => {
  return featureFlagModel.find().lean();
};
