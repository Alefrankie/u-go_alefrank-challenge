import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'

@Schema({ timestamps: true })
export class User {
  // @Prop({ type: mongoose.Types.ObjectId })
  _id: string

  @Prop()
  fullName: string

  @Prop()
  email: string

  @Prop()
  password: string
}

export type UserDocument = User & Document

export const UserSchema = SchemaFactory.createForClass(User)
