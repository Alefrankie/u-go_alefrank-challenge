import { Injectable } from '@nestjs/common'
import { AirportsRepository } from '../../domain/airport.repository'
import { IAirport } from '../../domain/IAirport'
import { FilterByKeyDTO } from './filter-by-key.dto'

@Injectable()
export class FilterByKeyService {
  constructor(private airportsRepository: AirportsRepository) {}

  async run({ key }: FilterByKeyDTO): Promise<IAirport[]> {
    return await this.airportsRepository.filterByKey(key)
  }
}
