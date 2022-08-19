import { Injectable } from '@nestjs/common'
import { AIRPORTS } from './AIRPORTS'
import { IAirport } from './IAirport'

@Injectable()
export class AirportsRepository {
  constructor() {}

  async filterByKey(key: string): Promise<IAirport[]> {
    const data: any = AIRPORTS.map((item) => {
      if (
        item.code.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
        item.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
      ) {
        return item
      }

      return false
    }).filter(Boolean)

    return data
  }
}
