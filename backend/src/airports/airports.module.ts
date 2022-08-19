import { Module } from '@nestjs/common'
import { FilterByKeyService } from './application/filter-by-key/filter-by-key.service'
import { AirportsRepository } from './domain/airport.repository'
import { AirportsController } from './infrastructure/airports.controller'

@Module({
  imports: [],
  controllers: [AirportsController],
  providers: [FilterByKeyService, AirportsRepository]
})
export class AirportsModule {}
