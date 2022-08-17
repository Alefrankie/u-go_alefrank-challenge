import { Injectable, NotFoundException } from '@nestjs/common'
import * as dayjs from 'dayjs'
import { CITIES } from 'src/cities/domain/CITIES'
import { AirlinesRepository } from '../../domain/airline.repository'
import { AIRLINES } from '../../domain/AIRLINES'
import { FindFlightsDTO } from './find-flights.dto'
@Injectable()
export class FindFlightsService {
  constructor(private airlinesRepository: AirlinesRepository) {}

  async run({ origin, destination, budget }: FindFlightsDTO): Promise<any> {
    const data = await this.airlinesRepository.findFlights(origin, destination)

    this.checkBudget(data.prices, budget)

    return {
      prices: this.formatPrices(data.prices),
      origin: CITIES.find((city) => city.code === data.origins[0]),
      destination: CITIES.find((city) => city.code === data.destinations[0])
    }
  }

  checkBudget(prices: any[], budget: number): void {
    for (const { price } of prices) {
      if (price > budget) throw new NotFoundException('Not found results with this budget')
    }
  }

  formatPrices(prices: any[]) {
    return prices
      .map((e) => {
        e.main_airline = AIRLINES.find((airline) => airline.code === e.main_airline)

        const dateInUnixTime = dayjs('2022-12-12T16:12:00-04:00').valueOf()
        e.arrival_date = dayjs(dateInUnixTime + this.minutesToMilliseconds(e.duration)).format(
          'YYYY-MM-DDTHH:mm:ss'
        )

        e.durationInHours = this.minutesToHours(e.duration)
        e.depart_date = dayjs(e.depart_date).format('YYYY-MM-DDTHH:mm:ss')

        return e
      })
      .filter(Boolean)
  }

  minutesToMilliseconds(minutes: number): number {
    return minutes * 60000
  }

  minutesToHours(minutes: number): number {
    return minutes / 60
  }
}
