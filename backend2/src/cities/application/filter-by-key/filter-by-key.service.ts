import { Injectable } from '@nestjs/common'
import { ICity } from '../../domain/ICity'
import { CitiesRepository } from '../../domain/city.repository'
import { FilterByKeyDTO } from './filter-by-key.dto'

@Injectable()
export class FilterByKeyService {
  constructor(private citiesRepository: CitiesRepository) {}

  async run({ key }: FilterByKeyDTO): Promise<ICity[]> {
    return await this.citiesRepository.filterByKey(key)
  }
}
