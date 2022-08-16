import { Controller, Post } from '@nestjs/common'

@Controller('/airlines')
export class AirlinesController {
  constructor() {}

  @Post('/flights')
  async flights() {
    return null
  }
}
