import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from '../../domain/user.schema'
import { SignInUserDto } from './sign-in-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class SignInService {
  private defaultPassword = '123456'

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async run({ email, password }: SignInUserDto): Promise<User> {
    const data = await this.userModel.findOne({ email })

    if (!data) {
      throw new ConflictException(`Credentials invalid!`)
    }

    const isMatch = await bcrypt.compare(password, data.password)

    if (!isMatch) {
      throw new UnauthorizedException(`Incorrect password!`)
    }

    return data
  }
}
