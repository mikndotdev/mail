import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.raw.text()
  console.log(body)
})

export default app
