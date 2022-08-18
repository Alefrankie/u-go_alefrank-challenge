import { getToken } from './useToken'

/* eslint-disable no-return-await */
const headers = new Headers({
  'Content-Type': 'application/json'
})

async function post<T = any>(url: string, { body }: { body: any }): Promise<T> {
  headers.append('Authorization', `Bearer ${getToken()}`)
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })

  if (res.status >= 400) {
    const error: Error = await res.json()

    throw new Error(error.message)
  }

  return await res.json()
}
async function get<T = any>(url: string): Promise<T> {
  headers.append('Authorization', `Bearer ${getToken()}`)
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
