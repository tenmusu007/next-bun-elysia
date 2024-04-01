import { Elysia, t } from 'elysia';

const ChatRoute = new Elysia({ prefix: '/chat' }).get('/', () => {
  return {
    message: 'Hello from Next.js!',
  };
});
export default ChatRoute;
