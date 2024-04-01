import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' }).get('/', () => 'hi');

export const GET= app.handle;
export const POST = app.handle;
