import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AirlinesModule } from 'src/airlines/airlines.module'
import { AirportsModule } from 'src/airports/airports.module'
import { CitiesModule } from 'src/cities/cities.module'
import { AuthModule } from '../auth/auth.module'
import { UserModule } from '../users/user.module'
import { AppController } from './app.controller'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_URI')
      }),
      inject: [ConfigService]
    }),
    UserModule,
    AuthModule,
    AirlinesModule,
    AirportsModule,
    CitiesModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
  constructor() {
    // if (process.env.NODE_ENV === 'development') {
    //   Logger.log(process.env.MONGODB_URI, 'MongoDbURI')
    // }
  }
}
