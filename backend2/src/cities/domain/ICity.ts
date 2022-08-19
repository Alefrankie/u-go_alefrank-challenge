import { IAirport } from '../../airports/domain/IAirport'

export interface ICity {
  code: string

  countryCode: string

  name: string

  airports: IAirport[]
}
