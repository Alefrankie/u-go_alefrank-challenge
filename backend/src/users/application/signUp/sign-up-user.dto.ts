import { IsEmail, IsNotEmpty } from 'class-validator'
export class SignUpUserDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  fullName: string

  @IsNotEmpty()
  password: string
}
