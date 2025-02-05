import { Hono } from 'hono'

const app = new Hono()

app.post('/', (c) => {
  const body = c.req.json()
  console.log(JSON.stringify(body))
})

export default app
