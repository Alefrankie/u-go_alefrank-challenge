import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AirlinesModule } from 'src/airlines/airlines.module'
import { AirportsModule } from 'src/airports/airports.module'
import { CitiesModule } from 'src/cities/cities.module'
import { UserModule } from '../users/user.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL
    ),
    UserModule,
    AirportsModule,
    CitiesModule,
    AirlinesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
