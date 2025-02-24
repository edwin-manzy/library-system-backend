import { Router } from 'express';

import * as FeatureFlagController from 'src/controllers/feature-flags';

export const featureFlagsRouter = Router();

featureFlagsRouter.get('/', FeatureFlagController.getFeatureFlags);
