import { describe, expect, it } from 'bun:test';
import { api } from '@/app/libs/api';
const URL = 'http://localhost/';

describe('/', () => {
  it('return is hi', async () => {
    const { data, error } = await api.user.elysia.get();
    expect(data).toBe('hi');
  });
});

describe('/elysia/test', () => {
  it('return is Hello from Next.js!', async () => {
    const { data, error } = await api.user.elysia.test.get();
    if (error) console.log(error);
    expect(data).toEqual({
      message: 'Hello from Next.js!',
    });
  });
});
