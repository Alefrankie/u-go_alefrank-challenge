import { IAirline } from './IAirline'

export interface IPrice {
  origin: string
  destination: string
  price: number
  main_airline: IAirline
  depart_date: string
  transfers: number
  duration: number
  link: string
  distance: number
  found_at: string
  gate: string
  trip_class: number
  arrival_date: string
  durationInHours: number
}
