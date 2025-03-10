export const TIME = {
  SEC_DAY: 86_400,
  MILL_DAY: 86_400_000
} as const;

export const COOKIE =  {
  USER_INFO: 'user_info',
} as const;


export type COOKIE_KEYS = typeof COOKIE[keyof typeof COOKIE];
