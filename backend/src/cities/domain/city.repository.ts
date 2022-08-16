import { Injectable } from '@nestjs/common'
import { CITIES } from './CITIES'
import { ICity } from './ICity'
// import { AIRPORTS } from '../../airports/domain/AIRPORTS'

@Injectable()
export class CitiesRepository {
  constructor() {}

  async filterByKey(key: string): Promise<ICity[]> {
    const data: any = CITIES.map((e: ICity) => {
      if (
        e.code.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
        e.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
      ) {
        // e.airports = AIRPORTS.filter((airport) => airport.cityCode.includes(e.code))
        return e
      }

      return false
    }).filter(Boolean)

    return data
  }
}
