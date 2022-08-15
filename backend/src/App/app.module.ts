import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from '../users/user.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL
    ),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
