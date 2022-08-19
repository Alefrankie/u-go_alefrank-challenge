import { Module } from '@nestjs/common'
import { FilterByKeyService } from './application/filter-by-key/filter-by-key.service'
import { CitiesRepository } from './domain/city.repository'
import { CitiesController } from './infrastructure/cities.controller'

@Module({
  imports: [],
  controllers: [CitiesController],
  providers: [FilterByKeyService, CitiesRepository]
})
export class CitiesModule {}
