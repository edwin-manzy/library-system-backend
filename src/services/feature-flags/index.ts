import { Query, Document } from 'mongoose';
import { FEATURE_FLAG_NAMES } from 'src/common/const/feature-flag';
import { FeatureFlag } from 'src/common/interfaces/feature-flag/feature-flag';
import { featureFlagModel } from 'src/models/feature-flag';


export const getFeatureFlags = (): Query<FeatureFlag[], FeatureFlag> => {
  return featureFlagModel.find().lean();
};

export const addFeatureFlags = (feature: Omit<FeatureFlag, keyof Document>[]): Promise<FeatureFlag[]> => {
  return featureFlagModel.insertMany(feature);
};


export const migrateFeatures = async (): Promise<void> => {
  const featureFlags = await getFeatureFlags();
  const featureMap = Object.fromEntries(featureFlags.map((feature) => ([feature.name, true])));

  const newFeatures: Omit<FeatureFlag, keyof Document>[] = [];

  Object.keys(FEATURE_FLAG_NAMES).forEach((name) => {
    if (featureMap[name]) {
      return;
    }

    newFeatures.push({
      name,
      created: new Date(),
      enabled: false,
    });
  });

  await addFeatureFlags(newFeatures);
};
