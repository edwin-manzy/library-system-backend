import { NextFunction } from 'express';
import { FEATURE_FLAG_NAMES } from 'src/common/const/feature-flag';
import { ApiRequest, ApiResponse, FeatureFlagMap } from 'src/common/interfaces';
import { FeatureFlag } from 'src/common/interfaces/feature-flag/feature-flag';
import * as FeatureFlagsService from 'src/services/feature-flags';

export const populateFeatures = async (req: ApiRequest,
  res: ApiResponse, next: NextFunction): Promise<void> =>
{
  const featureFlags = await FeatureFlagsService.getFeatureFlags();
  const featureMap = Object.fromEntries(featureFlags.map((feature) => ([feature.name, feature])));

  const features = Object.fromEntries(Object.keys(FEATURE_FLAG_NAMES).map((featureName) => {
    const feature: FeatureFlag = featureMap[featureName] ?? {
      name: featureName,
      date: new Date(),
      enabled: false
    };
    return [featureName, feature];
  })) as FeatureFlagMap;

  req.features = features;
  next();
};
