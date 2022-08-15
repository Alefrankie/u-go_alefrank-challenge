import { ConflictException, UnauthorizedException } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { User, UserSchema } from '../../domain/user.schema'
import { SignUpService } from '../signUp/sign-up.service'
import { SignInService } from './sign-in.service'

describe('SignInService', () => {
  let signInService: SignInService
  let signUpService: SignUpService

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(`mongodb://127.0.0.1/${process.env.TEST_DATABASE_NAME}`),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
      ],
      controllers: [],
      providers: [SignInService, SignUpService]
    }).compile()

    signInService = app.get<SignInService>(SignInService)
    signUpService = app.get<SignUpService>(SignUpService)
  })

  describe('should return credentials invalid', () => {
    it("when I'm no registered", async () => {
      try {
        await signInService.run({
          email: 'undefined@undefined.com',
          password: 'undefined'
        })
      } catch (e) {
        expect(e).toBeInstanceOf(ConflictException)
        expect(e.message).toBe('Credentials invalid!')
      }
    })
  })

  describe('should return Incorrect password!', () => {
    beforeAll(async () => {
      await signUpService.run({
        email: 'undefined@undefined.com',
        password: 'undefined',
        fullName: 'undefined'
      })
    })

    it("when I'm registered", async () => {
      try {
        await signInService.run({
          email: 'undefined@undefined.com',
          password: 'undefined'
        })
      } catch (e) {
        expect(e).toBeInstanceOf(UnauthorizedException)
        expect(e.message).toBe('Incorrect password!')
      }
    })
  })
})
