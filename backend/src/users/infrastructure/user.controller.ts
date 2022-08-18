import { Controller, Get, UseGuards } from '@nestjs/common'
import { GetUser } from 'src/auth/application/decorators/get-user.decorator'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guards'
import { User } from '../domain/user.schema'

@Controller('/users')
export class UserController {
  @Get('/who-am-i')
  @UseGuards(JwtAuthGuard)
  run(@GetUser() user: User) {
    return user
  }
}
