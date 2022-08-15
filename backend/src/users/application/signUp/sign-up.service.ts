import { ConflictException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from '@users/domain/user.schema'
import { Model } from 'mongoose'
import { SignUpUserDto } from './sign-up-user.dto'

@Injectable()
export class SignUpService {
  private defaultPassword = '123456'

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async run({ email, password, fullName }: SignUpUserDto): Promise<User> {
    if (!email || !password || !fullName) {
      throw new ConflictException('Invalid user!')
    }

    const isExist = await this.userModel.findOne({ email })

    if (isExist) {
      throw new ConflictException(`User already registered!`)
    }

    const userToCreate = await this.userModel.create({
      email,
      password,
      fullName
    })

    const userCreated = await userToCreate.save()

    return userCreated
  }
}
