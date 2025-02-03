export const platforms = [
  'IOS',
  'Android',
  'Windows',
  'MasOS',
] as const;

export type Platform = typeof platforms[number];
