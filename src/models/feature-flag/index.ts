import mongoose, { Model, Schema } from 'mongoose';
import { FeatureFlag } from 'src/common/interfaces/feature-flag/feature-flag';

const featureFlagSchema = new Schema<FeatureFlag>({
  name: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  created: {
    type: Date,
    default: (): Date => new Date()
  }
});

export const featureFlagModel: Model<FeatureFlag> =
  mongoose.model('feature-flag', featureFlagSchema);
