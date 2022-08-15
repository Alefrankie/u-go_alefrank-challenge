import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from '../Application/user.service'

describe('UserController', () => {
  let userController: UserController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile()

    userController = app.get<UserController>(UserController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(
        userController.signIn({
          email: 'Alefrank',
          password: '123456',
          fullName: ''
        })
      ).toBe('Hello World!')
    })
  })
})
