import { Injectable, NotFoundException } from '@nestjs/common'
import { CITIES } from 'src/cities/domain/CITIES'
import { AIRLINES } from './AIRLINES'
import * as dayjs from 'dayjs'

@Injectable()
export class AirlinesRepository {
  constructor() {}

  async findFlights(origin: string, destination: string, budget: number): Promise<any> {
    const originId = CITIES.find((city) => city.name === origin).code
    const destinationId = CITIES.find((city) => city.name === destination).code

    const options = {
      method: 'GET',
      headers: {
        'X-Access-Token': '43bb66c33b21d954bdf3b642b43f0e94',
        'X-RapidAPI-Key': 'ef0742f166mshbc8f849a5caddacp163f2djsn54cba83d5f58',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
      }
    }

    const res = await fetch(
      `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/nearest-places-matrix?origin=${originId}&destination=${destinationId}&flexibility=0&currency=USD&show_to_affiliates=true`,
      options
    )
    const data: any = await res.json()

    if (res.status !== 200)
      throw new NotFoundException('Not found results with this origin and destination')

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
