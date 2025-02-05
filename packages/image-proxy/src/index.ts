import { Hono } from 'hono';

const app = new Hono();

app.get('/:key/:url', async (c) => {
  const key = c.req.param('key');
  const url = c.req.param('url');

  if (!key || !url) {
    return c.json({ error: 'Invalid request' }, 400);
  }

  const data = await fetch(url);

  if (!data.ok) {
    return c.json({ error: 'Failed to fetch image' }, 500);
  }
  const contentType = data.headers.get('content-type');
  if (!contentType?.startsWith('image')) {
    return c.json({ error: 'Invalid content type' }, 400);
  }

  return new Response(data.body, { headers: { 'content-type': contentType } });
});

export default app;