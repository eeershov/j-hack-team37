export const pageName = {
  rules: 'Rules',
  game: 'Game',
  fears: 'Fears',
  results: 'Results',
} as const;

export type PageName = (typeof pageName)[keyof typeof pageName];
