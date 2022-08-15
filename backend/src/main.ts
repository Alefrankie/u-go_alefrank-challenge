import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

const PORT = 3001
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
  })
  await app.listen(process.env.PORT || PORT)
  Logger.log(`Application is running on: ${process.env.PORT || PORT}`)
}
bootstrap()
