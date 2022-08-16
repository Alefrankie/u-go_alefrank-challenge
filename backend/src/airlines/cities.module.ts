import { Module } from '@nestjs/common'
import { AirlinesRepository } from './domain/airline.repository'
import { AirlinesController } from './infrastructure/airlines.controller'

@Module({
  imports: [],
  controllers: [AirlinesController],
  providers: [AirlinesRepository]
})
export class CitiesModule {}
