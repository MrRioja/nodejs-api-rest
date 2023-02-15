import { app } from './app'
import { env } from './env'

app.listen({ port: env.APP_PORT }, () => {
  console.log(`🚀 Server is running on port ${env.APP_PORT} 🚀`)
})
