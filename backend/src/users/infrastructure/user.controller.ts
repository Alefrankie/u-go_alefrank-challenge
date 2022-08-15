import { Body, Controller, Post } from '@nestjs/common'
import { SignInService } from '@users/application/signIn/sign-in.service'
import { SignUpService } from '@users/application/signUp/sign-up.service'
import { User } from '../domain/user.schema'

@Controller('/users')
export class UserController {
  constructor(private signUpService: SignUpService, private signInService: SignInService) {}

  @Post('sign-in')
  async signIn(@Body() body: User) {
    return await this.signInService.run(body)
  }

  @Post('sign-up')
  async signUp(@Body() body: User) {
    return await this.signUpService.run(body)
  }
}
