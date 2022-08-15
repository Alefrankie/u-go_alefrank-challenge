import { Body, Controller, Post } from '@nestjs/common'
import { SignInUserDto } from '../application/signIn/sign-in-user.dto'
import { SignInService } from '../application/signIn/sign-in.service'
import { SignUpUserDto } from '../application/signUp/sign-up-user.dto'
import { SignUpService } from '../application/signUp/sign-up.service'

@Controller('/users')
export class UserController {
  constructor(private signUpService: SignUpService, private signInService: SignInService) {}

  @Post('sign-in')
  async signIn(@Body() body: SignInUserDto) {
    return await this.signInService.run(body)
  }

  @Post('sign-up')
  async signUp(@Body() body: SignUpUserDto) {
    return await this.signUpService.run(body)
  }
}
