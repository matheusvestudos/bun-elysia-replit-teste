import { Elysia, t } from "elysia"
import { swagger } from '@elysiajs/swagger'

import {UserRoute} from './routes/user'

const app = new Elysia()
  .use(swagger({ 
    provider: "swagger-ui", 
    path: "/docs" 
  }))
  .get("/", () => "Hello Elysia dev")
  .use(UserRoute)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
