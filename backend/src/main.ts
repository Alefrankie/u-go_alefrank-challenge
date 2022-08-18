import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './_app/app.module'

import serverlessExpress from '@vendia/serverless-express'
import { Callback, Context, Handler } from 'aws-lambda'

const PORT = 3001

let server: Handler

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
  })
  await app.init()
  await app.listen(process.env.PORT || PORT)
  Logger.log(`Application is running on: ${process.env.PORT || PORT}`)

  const expressApp = app.getHttpAdapter().getInstance()
  return serverlessExpress({ app: expressApp })
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  server = server ?? (await bootstrap())
  return server(event, context, callback)
}
