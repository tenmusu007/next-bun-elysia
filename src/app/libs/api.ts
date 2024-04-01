import { treaty } from '@elysiajs/eden';
import { App } from '../api/[...routes]/route';

export const api = treaty<App>(
  typeof window === 'undefined'
    ? `http://localhost:${process.env.PORT ?? 3000}`
    : window.location.origin
).api;
