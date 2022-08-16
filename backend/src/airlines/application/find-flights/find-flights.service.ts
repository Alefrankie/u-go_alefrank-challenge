import { Injectable } from '@nestjs/common'
import { AirlinesRepository } from '../../domain/airline.repository'
import { IAirline } from '../../domain/IAirline'
import { FindFlightsDTO } from './find-flights.dto'

@Injectable()
export class FindFlightsService {
  constructor(private airlinesRepository: AirlinesRepository) {}

  async run({ origin, destination, budget }: FindFlightsDTO): Promise<IAirline> {
    const data = await this.airlinesRepository.findFlights(origin, destination, budget)

    return data
  }
}
