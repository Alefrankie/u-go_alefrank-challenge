import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../../../app/app.module'
import { UsersRepository } from '../../domain/user.repository'
import { SignUpService } from './sign-up.service'

describe('SignUpService', () => {
  let signUpService: SignUpService
  let usersRepository: UsersRepository
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: []
    }).compile()

    signUpService = app.get<SignUpService>(SignUpService)
    usersRepository = app.get<UsersRepository>(UsersRepository)

    await usersRepository.removeAll()
  })

  it('should register an user', async () => {
    await signUpService.run({
      email: 'undefined@undefined.com',
      password: 'undefined',
      fullName: 'undefined'
    })
  })

  it('should be null when not found user by email', async () => {
    const data = await signUpService.checkEmail('noExist@noExist.com')
    expect(data).toBe(null)
  })

  it('should return user already registered!', async () => {
    expect(signUpService.checkEmail('undefined@undefined.com')).rejects.toThrow(
      'User already registered!'
    )
  })

  afterAll(async () => {
    app.close()
  })
})
