import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { SignUpUserDto } from '../application/signUp/sign-up-user.dto'
import { User, UserDocument } from './user.schema'

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email })
  }

  async create(body: SignUpUserDto): Promise<User> {
    const userToCreate = await this.userModel.create(body)

    return await userToCreate.save()
  }

  async removeOne(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id)
  }

  async removeAll(): Promise<void> {
    await this.userModel.deleteMany()
  }
}
