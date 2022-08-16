import { Body, Controller, Post } from '@nestjs/common'

@Controller('/airlines')
export class UserController {
  constructor() {}

  @Post('/')
  async signIn() {
    return null
  }
}
