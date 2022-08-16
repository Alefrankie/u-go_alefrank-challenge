import { IAirport } from './IAirport'

export interface ICity {
  code: string

  countryCode: string

  name: string

  airports: IAirport[]
}
