import { Elysia, t } from 'elysia';

const UserRoutes = new Elysia({ prefix: '/user' })
  .get('/elysia', () => 'hi')
  .get('/elysia/test', () => {
    return {
      message: 'Hello from Next.js!',
    };
  })
  .get('/elysia/:id', ({ params }) => {
    return {
      id: params.id,
    };
  }, {
    params: t.Object({
      id: t.String(),
    }),
  })
  .patch(
    '/elysia/profile',
    ({ body, error }) => {
      if (body.age < 18) return error(400, 'Oh no');

      if (body.name === 'Nagisa') return error(418);

      return body;
    },
    {
      body: t.Object({
        name: t.String(),
        age: t.Number(),
      }),
    }
  );

export default UserRoutes;
