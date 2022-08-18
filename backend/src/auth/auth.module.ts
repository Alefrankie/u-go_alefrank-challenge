import { Module } from '@nestjs/common'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersRepository } from 'src/users/domain/user.repository'
import { User, UserSchema } from 'src/users/domain/user.schema'
import { JwtAuthGuard } from './application/guards/jwt-auth.guards'
import { SignInService } from './application/sign-in/sign-in.service'
import { SignUpService } from './application/sign-up/sign-up.service'
import { JwtStrategy } from './application/strategies/jwt.strategy'
import { jwtConstants } from './domain/jwtConstants'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' }
    })
  ],
  providers: [SignInService, SignUpService, JwtStrategy, UsersRepository]
})
export class AuthModule {}
