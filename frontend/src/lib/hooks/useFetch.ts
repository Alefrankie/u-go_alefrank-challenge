async function post<T>(url: string, { body }: { body: T }): Promise<T> {
  const res = await fetch(url, {
    body: JSON.stringify(body)
  })

  const message = await res.text()
  if (res.status >= 400) {
    throw new Error(message)
  }

  const data: T = await res.json()cd 

  return data
}

export const useFetch = { post }
