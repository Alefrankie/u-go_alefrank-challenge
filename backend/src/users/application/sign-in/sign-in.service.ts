import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { UsersRepository } from '../../domain/user.repository'
import { User } from '../../domain/user.schema'
import { SignInUserDto } from './sign-in-user.dto'

@Injectable()
export class SignInService {
  constructor(private usersRepository: UsersRepository) {}

  async run({ email, password }: SignInUserDto): Promise<User> {
    const data = await this.checkEmail(email)

    await this.checkPassword(password, data.password)

    return data
  }

  async checkEmail(email: string): Promise<User> {
    const isExist = await this.usersRepository.findByEmail(email)

    if (!isExist) {
      throw new ConflictException(`Credentials invalid!`)
    }

    return isExist
  }

  async checkPassword(password: string, hash: string): Promise<void> {
    const isMatch = await bcrypt.compare(password, hash)

    if (!isMatch) {
      throw new UnauthorizedException(`Incorrect password!`)
    }
  }
}
