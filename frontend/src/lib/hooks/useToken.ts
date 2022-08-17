const TOKEN_KEY: string = 'token'

export function getToken(): string | null {
  return window.localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string): void {
  return window.localStorage.setItem(TOKEN_KEY, token)
}

export function deleteToken(): void {
  return window.localStorage.removeItem(TOKEN_KEY)
}
