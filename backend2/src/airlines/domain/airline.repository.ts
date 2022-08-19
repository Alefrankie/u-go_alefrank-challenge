import { Injectable, NotFoundException } from '@nestjs/common'
import { CITIES } from 'src/cities/domain/CITIES'

@Injectable()
export class AirlinesRepository {
  constructor() {}

  async findFlights(originName: string, destinationName: string): Promise<any> {
    const origin = CITIES.find((city) => city.name === originName)
    const destination = CITIES.find((city) => city.name === destinationName)

    if (!origin || !destination)
      throw new NotFoundException(
        `Not found results with this origin and destination: ${originName} - ${destinationName}`
      )

    const options = {
      method: 'GET',
      headers: {
        'X-Access-Token': '43bb66c33b21d954bdf3b642b43f0e94',
        'X-RapidAPI-Key': 'ef0742f166mshbc8f849a5caddacp163f2djsn54cba83d5f58',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
      }
    }

    const res = await fetch(
      `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/nearest-places-matrix?origin=${origin.code}&destination=${destination.code}&flexibility=0&currency=USD&show_to_affiliates=true`,
      options
    )
    const data: any = await res.json()

    if (res.status !== 200)
      throw new NotFoundException('Not found results with this origin and destination')

    return data
  }
}
