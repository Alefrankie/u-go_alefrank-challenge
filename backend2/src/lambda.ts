import { NestFactory } from '@nestjs/core'
import serverlessExpress from '@vendia/serverless-express'
import { Callback, Context, Handler } from 'aws-lambda'
import { AppModule } from './_app/app.module'

let server: Handler

// serverless deploy    Deploy changes
// serverless info      View deployed endpoints and resources
// serverless invoke    Invoke deployed functions
// serverless --help    Discover more commands

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.init()

  const expressApp = app.getHttpAdapter().getInstance()
  return serverlessExpress({ app: expressApp })
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  server = server ?? (await bootstrap())
  return server(event, context, callback)
}
