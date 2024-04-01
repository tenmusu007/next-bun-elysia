import cors, { HTTPMethod } from '@elysiajs/cors';
import { Elysia } from 'elysia';
import UserRoutes from './user';
import ChatRoute from './chat';
import { websocket } from '@elysiajs/websocket';

// const app = new Elysia({ prefix: '/api' })
//   .get('/elysia', () => 'hi')
//   .get('/elysia/test', () => {
//     return {
//       message: 'Hello from Next.js!',
//     };
//   })
//   .patch(
//     '/elysia/profile',
//     ({ body, error }) => {
//       if (body.age < 18) return error(400, 'Oh no');

//       if (body.name === 'Nagisa') return error(418);

//       return body;
//     },
//     {
//       body: t.Object({
//         name: t.String(),
//         age: t.Number(),
//       }),
//     }
//   );
const corsConfig = {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'] as HTTPMethod[],
  allowedHeaders: '*',
  exposedHeaders: '*',
  maxAge: 5,
  credentials: true,
};
const app = new Elysia({ prefix: '/api' })
  .use(UserRoutes)
  .use(ChatRoute)
  // .use(websocket())
  .use(cors(corsConfig));
export const GET = app.handle;
export const POST = app.handle;
export const PATCH = app.handle;
export const DELETE = app.handle;
export const PUT = app.handle;
export type App = typeof app;
