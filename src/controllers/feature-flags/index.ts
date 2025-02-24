import { ApiRequest, ApiResponse } from 'src/common/interfaces';
import * as FeatureFlagService from 'src/services/feature-flags';
import { buildSuccessfulJsonResponse } from 'src/utils/helpers';

export const getFeatureFlags = async (req: ApiRequest, res: ApiResponse): Promise<void> => {
  const features = await FeatureFlagService.getFeatureFlags();
  res.send(buildSuccessfulJsonResponse(features));
};
