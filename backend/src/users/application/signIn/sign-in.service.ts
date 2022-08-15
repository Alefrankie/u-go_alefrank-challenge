import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from '@users/Domain/user.schema'
import { Model } from 'mongoose'
import { SignInUserDto } from './sign-in-user.dto'

@Injectable()
export class SignInService {
  private defaultPassword = '123456'

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async run({ email, password }: SignInUserDto): Promise<User> {
    if (!email || !password) {
      throw new ConflictException('Invalid user!')
    }

    const data = await this.userModel.findOne({ email })

    if (!data) {
      throw new NotFoundException(`Credentials invalid!`)
    }

    if (data.password !== password) {
      throw new ConflictException(`Incorrect password!`)
    }

    return data
  }
}
