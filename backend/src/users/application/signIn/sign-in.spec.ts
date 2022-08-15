import { ConflictException, UnauthorizedException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../../../app/app.module'
import { UsersRepository } from '../../domain/user.repository'
import { SignInService } from './sign-in.service'

describe('SignInService', () => {
  let signInService: SignInService
  let usersRepository: UsersRepository
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: []
    }).compile()

    signInService = app.get<SignInService>(SignInService)
    usersRepository = app.get<UsersRepository>(UsersRepository)

    await usersRepository.removeAll()
  })

  it("should return credentials invalid when I'm not registered", async () => {
    expect(
      signInService.run({
        email: 'undefined@undefined.com',
        password: 'undefined'
      })
    ).rejects.toThrow('Credentials invalid!')
  })

  it("should return Incorrect password when I'm registered", async () => {
    expect(
      signInService.run({
        email: 'undefined@undefined.com',
        password: 'undefined'
      })
    ).rejects.toThrow('Incorrect password!')
  })

  afterAll(async () => {
    app.close()
  })
})
