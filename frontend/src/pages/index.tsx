/* eslint-disable function-paren-newline */
import { ButtonSubmit } from '@components/buttons/ButtonSubmit'
import { Input } from '@components/Input/Input'
import { Loading } from '@components/Loading/Loading'
import styles from '@styles/home.module.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import Router from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaPlane } from 'react-icons/fa'
import { useFetch } from 'src/lib/hooks/useFetch'

type Inputs = {
  origin: string
  destination: string
  budget: number
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<Inputs>({ defaultValues: { origin: '', destination: '', budget: 0 } })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('A')
      }, 2000)
    })
    // Router.push('/')
  }

  const onOriginKeyUp = async () => {
    // const key = watch('origin')

    const data = await useFetch.post('http://localhost:3001/api/cities/filter', {
      body: {
        key: watch('origin')
      }
    })

    console.log(data)
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-Access-Token': '43bb66c33b21d954bdf3b642b43f0e94',
    //     'X-RapidAPI-Key': 'ef0742f166mshbc8f849a5caddacp163f2djsn54cba83d5f58',
    //     'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
    //   }
    // }
    // fetch(
    //   'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/nearest-places-matrix?origin=CCS&destination=MAD&flexibility=0&currency=USD&show_to_affiliates=true',
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
  }

  if (isSubmitting) {
    return <Loading />
  }

  return (
    <>
      <header className={styles.header}>
        <button type="button" onClick={() => Router.push('/auth/sign-in')}>
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
          <Input
            placeholder="To"
            register={register('destination', { required: 'Destination is required' })}
            errors={errors.destination}
          />
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
