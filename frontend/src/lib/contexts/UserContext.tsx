import React, { createContext, ReactNode, useContext, useEffect, useMemo, useReducer } from 'react'
import { useFetch } from '../hooks/useFetch'
import { getToken } from '../hooks/useToken'
import jwt from 'jwt-simple'
interface IUseUserContext {
  isLoading: boolean
  setState: any
  user: any
}

const UserContext = createContext({} as IUseUserContext)

type Props = {
  children: ReactNode
}

export function UserProvider({ children }: Props): React.ReactElement {
  const [{ isLoading, user }, setState] = useReducer(Reducer, {
    isLoading: true,
    user: null
  })

  function Reducer(prevState: any, state: any) {
    return { ...prevState, ...state }
  }

  useEffect((): void => {
    if (getToken()) {
      const payload = jwt.decode(String(getToken()), String(process.env.NEXT_PUBLIC_JWT_SECRET))
      setState({ user: payload })
    }
  }, [])

  const value = useMemo(
    () => ({
      isLoading,
      setState,
      user
    }),
    [isLoading, user]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext(): IUseUserContext {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext should be into a UserProvider')
  }
  return context
}
