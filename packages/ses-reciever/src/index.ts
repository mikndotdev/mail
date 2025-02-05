import { Hono } from 'hono'

const app = new Hono()

app.post('/', (c) => {
  const body = c.req.json()
  console.log(body)
})

export default app
