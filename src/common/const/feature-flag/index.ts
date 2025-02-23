import { createMirror } from 'src/utils/helpers/common';

export const FEATURE_FLAG_NAMES = createMirror([
  'FEATURE_SERVER_OFFLINE'
] as const);
