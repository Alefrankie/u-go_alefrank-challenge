import { SetStateAction } from 'react'
import { ICity } from '../interfaces/ICity'
import { useFetch } from './useFetch'

let timeoutId: any = null
export function useFindCitiesByKey(
  key: string,
  setState: (value: SetStateAction<ICity[]>) => void
): void {
  if (!key || key.length < 1) {
    return
  }

  timeoutId = setTimeout(async () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const data = await useFetch.post<ICity[]>('/cities/filter', {
      body: {
        key
      }
    })

    setState(data)
  }, 500)
}
