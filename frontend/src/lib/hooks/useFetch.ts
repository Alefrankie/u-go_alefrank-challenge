/* eslint-disable no-return-await */
async function post<T>(url: string, { body }: { body: any }): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (res.status >= 400) {
    const error: Error = await res.json()

    throw new Error(error.message)
  }

  return await res.json()
}

export const useFetch = { post }
