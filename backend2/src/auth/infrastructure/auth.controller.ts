import { Body, Controller, Post } from '@nestjs/common'
import { SignInUserDto } from '../application/sign-in/sign-in-user.dto'
import { SignInService } from '../application/sign-in/sign-in.service'
import { SignUpUserDto } from '../application/sign-up/sign-up-user.dto'
import { SignUpService } from '../application/sign-up/sign-up.service'

@Controller('/auth')
export class AuthController {
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
