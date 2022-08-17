import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react'
import { useFetch } from '../hooks/useFetch'
import { getToken } from '../hooks/useToken'

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

  const whoAmI = useCallback(async () => {
    try {
      if (!getToken()) {
        throw new Error('Token Not Found!')
      }

      const data = await useFetch.get('http://localhost:3001/api/users/who-a-mi')

      setState({ user: data, isLoading: false })
    } catch ({ message }) {
      console.log(message)
      setState({ isLoading: false })
    }
  }, [])

  useEffect((): void => {
    whoAmI()
  }, [whoAmI])

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
