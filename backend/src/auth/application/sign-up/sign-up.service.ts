import { ConflictException, Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { UsersRepository } from 'src/users/domain/user.repository'
import { User } from 'src/users/domain/user.schema'
import { SignUpUserDto } from './sign-up-user.dto'

@Injectable()
export class SignUpService {
  constructor(private usersRepository: UsersRepository) {}

  async run({ email, password, fullName }: SignUpUserDto): Promise<User> {
    await this.checkEmail(email)

    return await this.usersRepository.create({
      email,
      password: await this.passwordHash(password),
      fullName
    })
  }

  async checkEmail(email: string): Promise<void> {
    const isExist = await this.usersRepository.findByEmail(email)

    if (isExist) {
      throw new ConflictException(`User already registered!`)
    }
  }

  async passwordHash(password: string): Promise<string> {
    const saltOrRounds = 10
    return await bcrypt.hash(password, saltOrRounds)
  }
}
