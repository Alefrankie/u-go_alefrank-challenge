import Router from 'next/router'
import { deleteToken } from 'src/lib/hooks/useToken'

export function ButtonSignOut() {
  const signOut = () => {
    Router.push('/auth/sign-in')
    deleteToken()
  }
  return (
    <button
      type="button"
      onClick={signOut}
      className="text-3xl font-semibold border-none bg-none text-vivid-cerulean"
    >
      Log Out
    </button>
  )
}
