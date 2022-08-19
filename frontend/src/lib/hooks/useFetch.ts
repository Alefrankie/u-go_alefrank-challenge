import { getToken } from './useToken'

/* eslint-disable no-return-await */

const HOST =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : process.env.NEXT_PUBLIC_HOST

async function post<T = any>(url: string, { body }: { body: any }): Promise<T> {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  headers.append('Authorization', `Bearer ${getToken()}`)
  const res = await fetch(HOST + url, {
    credentials: 'include',
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
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  headers.append('Authorization', `Bearer ${getToken()}`)
  const res = await fetch(HOST + url, {
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
