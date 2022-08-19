/* eslint-disable no-return-await */
import { IFlight } from '../interfaces/IFlights'
import { useFetch } from './useFetch'

interface IFetchFlights {
  origin: string
  destination: string
  budget: number | null
}

export async function useFetchFlights({ origin, destination, budget }: IFetchFlights) {
  return await useFetch.post<IFlight>('/airlines/flights', {
    body: {
      origin,
      destination,
      budget
    }
  })
}
