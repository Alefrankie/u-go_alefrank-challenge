import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = 3001
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
  })

  await app.listen(process.env.PORT || PORT)
}
bootstrap()
