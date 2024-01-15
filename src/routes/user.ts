import Elysia, {t} from 'elysia'
import { random } from '../utils/fuctions'
import sql from '../utils/sql'

export const UserRoute = new Elysia()
.get('/user', async () => {
  const users = await sql`SELECT * FROM users`
  return JSON.stringify(users, null, 2)
})

.get('/user/:id', async ({
  params: { id }
}) => {
  const user = await sql`SELECT * FROM users WHERE id = ${id}`
  return JSON.stringify(user, null, 2)
})

.post('/user', async ({ 
  body: { name, password }
}) => {
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

.put('/user/:id', async ({
  params: {id},
  body: { name, password}
}) => {
  const Id = Number(id)
  if (!Id) {
    return 'ID must be a number'
  }
  const updateUser = await sql`
  UPDATE users SET name = ${name}, password = ${password} WHERE id = ${Id}
  `
  return updateUser
}, {
  params: t.Object({
    id: t.String()
  }),
  body: t.Object({
    name: t.String(),
    password: t.String()
  })
})

.delete('/user/:id', async ({
  params: {id}
}) => {
  const Id = Number(id)
  if (!Id) {
    return 'ID must be a number'
  }
  const deleteUser = await sql`
  DELETE FROM users WHERE id = ${Id}
  `
  return deleteUser
})