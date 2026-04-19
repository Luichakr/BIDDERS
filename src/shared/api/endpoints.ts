export const endpoints = {
  home: '/api/home',
  lotDetail: (lotId: string) => `/api/lots/${lotId}`,
} as const
