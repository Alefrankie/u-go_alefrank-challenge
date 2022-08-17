import React, { createContext, ReactNode, useContext, useMemo, useReducer } from 'react'
import { IFlight } from '../interfaces/IFlights'
import { IPrice } from '../interfaces/IPrice'

interface IUseFlightsContext {
  isLoading: boolean
  setState: any
  prices: IPrice[]
  flight: IFlight
  error: Error
}

const FlightsContext = createContext({} as IUseFlightsContext)

type Props = {
  children: ReactNode
}

export function FlightsContextProvider({ children }: Props): React.ReactElement {
  const [{ isLoading, flight, prices, error }, setState] = useReducer(Reducer, {
    isLoading: true,
    flight: null,
    prices: [],
    error: null
  })

  function Reducer(prevState: any, state: any) {
    return { ...prevState, ...state }
  }

  const value = useMemo(
    () => ({
      setState,
      isLoading,
      flight,
      prices,
      error
    }),
    [flight, prices, isLoading, error]
  )

  return <FlightsContext.Provider value={value}>{children}</FlightsContext.Provider>
}

export function useFlightsContext(): IUseFlightsContext {
  const context = useContext(FlightsContext)
  if (!context) {
    throw new Error('useFlights context should be into a FlightsProvider')
  }
  return context
}
