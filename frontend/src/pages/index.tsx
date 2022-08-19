import { ButtonSubmit } from '@components/buttons/ButtonSubmit'
import { CitiesList } from '@components/CitiesList'
import { Input } from '@components/Input/Input'
import { Loading } from '@components/Loading/Loading'
import styles from '@styles/home.module.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaPlane } from 'react-icons/fa'
import { useFlightsContext } from 'src/lib/contexts/FlightsContext'
import { useFetchFlights } from 'src/lib/hooks/useFetchFlights'
import { useFindCitiesByKey } from 'src/lib/hooks/useFindCitiesByKey'
import { deleteToken } from 'src/lib/hooks/useToken'
import { ICity } from 'src/lib/interfaces/ICity'

type Inputs = {
  origin: string
  destination: string
  budget: number | null
}

const Home: NextPage = () => {
  const { setState } = useFlightsContext()
  const [origins, setOrigins] = useState<ICity[]>([])
  const [destinations, setDestinations] = useState<ICity[]>([])
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<Inputs>({
    defaultValues: { origin: '', destination: '', budget: null }
  })

  const onSubmit: SubmitHandler<Inputs> = async ({ origin, destination, budget }) => {
    try {
      const data = await useFetchFlights({
        origin,
        destination,
        budget
      })

      setState({ prices: data.prices })

      Router.push(`/flights?origin=${origin}&destination=${destination}&budget=${budget}`)
    } catch (error: any) {
      alert(error.message)
    }
  }

  const onOriginKeyUp = () => useFindCitiesByKey(watch('origin'), setOrigins)

  const onDestinationKeyUp = () => useFindCitiesByKey(watch('destination'), setDestinations)

  const signOut = () => {
    Router.push('/auth/sign-in')
    deleteToken()
  }

  if (isSubmitting) {
    return <Loading />
  }

  return (
    <>
      <header className={styles.header}>
        <button type="button" onClick={signOut}>
          Log Out
        </button>
      </header>

      <main className={styles.main}>
        <Image
          src="/logo-2.png"
          alt="logo"
          width={400}
          height={500}
          layout="fixed"
          className={styles.logo}
        />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="From"
            register={register('origin', { required: 'Origin is required' })}
            errors={errors.origin}
            {...{ onKeyUp: onOriginKeyUp }}
          />

          <CitiesList data={origins} id="From" />

          <Input
            placeholder="To"
            register={register('destination', { required: 'Destination is required' })}
            errors={errors.destination}
            {...{ onKeyUp: onDestinationKeyUp }}
          />

          <CitiesList data={destinations} id="To" />

          <Input
            placeholder="Max $"
            type="number"
            register={register('budget', { required: 'Budget is required' })}
            errors={errors.budget}
          />
          <ButtonSubmit>
            Search flights <FaPlane style={{ transform: 'rotate(-45deg)' }} />
          </ButtonSubmit>
        </form>
      </main>
    </>
  )
}

export default Home
