import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './App/app.module'

const PORT = 3001
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  await app.listen(3001)
  await app.listen(process.env.PORT || PORT)
  Logger.log(`Application is running on: ${process.env.PORT || PORT}`)
}
bootstrap()
