import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SignInService } from './application/sign-in/sign-in.service'
import { SignUpService } from './application/sign-up/sign-up.service'
import { UsersRepository } from './domain/user.repository'
import { User, UserSchema } from './domain/user.schema'
import { UserController } from './infrastructure/user.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [SignInService, SignUpService, UsersRepository]
})
export class UserModule {}
