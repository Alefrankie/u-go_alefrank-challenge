import { Injectable } from '@nestjs/common'
import { CITIES } from './CITIES'
import { ICity } from './ICity'

@Injectable()
export class CitiesRepository {
  constructor() {}

  async filterByKey(key: string): Promise<ICity[]> {
    const data: any = CITIES.map((e: ICity) => {
      if (
        e.code.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
        e.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
      ) {
        return e
      }

      return false
    }).filter(Boolean)

    return data
  }
}
