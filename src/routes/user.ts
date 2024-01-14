import Elysia, {t} from 'elysia'
import { random } from '../utils/fuctions'
import sql from '../utils/sql'

export const UserRoute = new Elysia()
.get('/user', async () => {
  const users = await sql`SELECT * FROM users`
  return users
})

.post('/user', async ({ body: { name, password }}) => {
  const id = random()
  const user = await sql`INSERT INTO users (id, name, password) VALUES (${id}, ${name}, ${password}) RETURNING *`
  return {
    mensager: 'User created',
    user,
  }
}, 
{
  body: t.Object({
   name: t.String(),
   password: t.String()
  })
})