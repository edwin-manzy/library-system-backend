import { Document } from 'mongoose';

export interface FeatureFlag extends Document {
  name: string;
  created: Date;
  enabled: boolean;
}
