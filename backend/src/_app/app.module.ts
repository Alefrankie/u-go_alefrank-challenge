import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AirlinesModule } from '../airlines/airlines.module'
import { AirportsModule } from '../airports/airports.module'
import { AuthModule } from '../auth/auth.module'
import { CitiesModule } from '../cities/cities.module'
import { UserModule } from '../users/user.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL
    ),
    AuthModule,
    UserModule,
    AirportsModule,
    CitiesModule,
    AirlinesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
