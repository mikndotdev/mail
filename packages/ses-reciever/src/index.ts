import { Hono } from 'hono'

const app = new Hono()

app.post('/', (c) => {
  const body = c.req.text()
  console.log(body)
})

export default app
