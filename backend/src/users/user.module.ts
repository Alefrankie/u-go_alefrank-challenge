import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersRepository } from './domain/user.repository'
import { User, UserSchema } from './domain/user.schema'
import { UserController } from './infrastructure/user.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UsersRepository]
})
export class UserModule {}
