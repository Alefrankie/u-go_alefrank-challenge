import { ButtonNewSearch } from '@components/buttons/ButtonNewSearch'
import { TablePrices } from '@components/TablePrices'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useFlightsContext } from 'src/lib/contexts/FlightsContext'
import { useFetchFlights } from 'src/lib/hooks/useFetchFlights'

const Home: NextPage = () => {
  const { setState } = useFlightsContext()
  const router = useRouter()
  const { origin, destination, budget } = router.query

  useEffect(() => {
    if (origin && destination && budget) {
      useFetchFlights({
        origin: String(origin),
        destination: String(destination),
        budget: Number(budget)
      })
        .then(({ prices }) => {
          setState({ prices })
        })
        .catch((error) => {
          setState({ error })
        })
    }
  }, [origin, destination, budget, setState])

  return (
    <>
      <header className="flex items-center gap-6 p-10 mb-3" test-id="header">
        <Image src="/logo-1.png" alt="logo" width={100} height={100} layout="fixed" />

        <span className="text-3xl font-bold uppercase text-vivid-cerulean grow">
          YOUR FLIGHTS FROM {origin} TO {destination} UNDER ${budget}
        </span>

        <ButtonNewSearch />
      </header>

      <TablePrices />
    </>
  )
}

export default Home
