import { ConflictException } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { SignInService } from '../application/sign-in/sign-in.service'
import { SignUpService } from '../application/sign-up/sign-up.service'
import { User, UserSchema } from '../../users/domain/user.schema'
import { UserController } from '../../users/infrastructure/user.controller'

describe('UserController', () => {
  let userController: UserController

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1/u_go_test'),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
      ],
      controllers: [UserController],
      providers: [SignInService, SignUpService]
    }).compile()

    userController = app.get<UserController>(UserController)
  })

  describe('sign-in', () => {
    it('should return credentials invalid', async () => {
      try {
        await userController.signIn({
          email: 'undefined@undefined.com',
          password: 'undefined'
        })
      } catch (e) {
        expect(e).toBeInstanceOf(ConflictException)
        expect(e.message).toBe('Credentials invalid!')
      }
    })
  })
})
