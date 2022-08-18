import { getToken } from './useToken'

/* eslint-disable no-return-await */
const headers = new Headers({
  'Content-Type': 'application/json',
  Authorization: 'Bearer '
})
async function post<T = any>(url: string, { body }: { body: any }): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }),
    body: JSON.stringify(body)
  })

  if (res.status >= 400) {
    const error: Error = await res.json()

    throw new Error(error.message)
  }

  return await res.json()
}
async function get<T = any>(url: string): Promise<T> {
  const res = await fetch(url, {
    method: 'GET',
    headers
  })

  if (res.status >= 400) {
    const error: Error = await res.json()

    throw new Error(error.message)
  }

  return await res.json()
}

export const useFetch = { post, get }
