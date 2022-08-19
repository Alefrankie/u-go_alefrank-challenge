import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcryptjs from 'bcryptjs'
import { UsersRepository } from 'src/users/domain/user.repository'
import { User } from 'src/users/domain/user.schema'
import { SignInUserDto } from './sign-in-user.dto'

@Injectable()
export class SignInService {
  constructor(private usersRepository: UsersRepository, private jwtService: JwtService) {}

  async run({ email, password }: SignInUserDto): Promise<{ user: User; token: string }> {
    const user = await this.checkEmail(email)

    await this.checkPassword(password, user.password)
    const payload = {
      _id: user._id,
      fullName: user.fullName
    }
    const token = await this.jwtService.sign(payload)

    return { user, token }
  }

  async checkEmail(email: string): Promise<User> {
    const isExist = await this.usersRepository.findByEmail(email)

    if (!isExist) {
      throw new ConflictException(`Credentials invalid!`)
    }

    return isExist
  }

  async checkPassword(password: string, hash: string): Promise<void> {
    const isMatch = await bcryptjs.compareSync(password, hash)

    if (!isMatch) {
      throw new UnauthorizedException(`Incorrect password!`)
    }
  }
}
