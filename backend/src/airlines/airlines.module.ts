import { Module } from '@nestjs/common'
import { FindFlightsService } from './application/find-flights/find-flights.service'
import { AirlinesRepository } from './domain/airline.repository'
import { AirlinesController } from './infrastructure/airlines.controller'

@Module({
  imports: [],
  controllers: [AirlinesController],
  providers: [AirlinesRepository, FindFlightsService]
})
export class AirlinesModule {}
