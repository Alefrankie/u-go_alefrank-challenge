import { ICity } from './ICity'
import { IPrice } from './IPrice'

export interface IFlight {
  prices: IPrice[]
  origin: ICity
  destination: ICity
}
