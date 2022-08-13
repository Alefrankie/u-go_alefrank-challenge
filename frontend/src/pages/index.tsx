import { ButtonSubmit } from '@components/buttons/ButtonSubmit'
import { Input } from '@components/Input/Input'
import { Loading } from '@components/Loading/Loading'
import styles from '@styles/home.module.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import Router from 'next/router'
import { FormEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaPlane } from 'react-icons/fa'

type Inputs = {
  from: string
  to: string
  budget: number
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({ defaultValues: { from: '', to: '', budget: 0 } })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('A')
      }, 2000)
    })
    // Router.push('/')
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
            register={register('from', { required: 'Email is required' })}
            errors={errors.from}
          />
          <Input
            placeholder="To"
            register={register('to', { required: 'Destiny is required' })}
            errors={errors.to}
          />
          <Input
            placeholder="Max $"
            type="number"
            register={register('budget', { required: 'Email is required' })}
            errors={errors.budget}
            {...{ step: '0.01' }}
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
