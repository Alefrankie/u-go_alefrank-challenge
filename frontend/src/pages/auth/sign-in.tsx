import { ButtonSubmit } from '@components/buttons/ButtonSubmit'
import { Input } from '@components/Input/Input'
import { Loading } from '@components/Loading/Loading'
import styles from '@styles/auth.module.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ defaultValues: { email: '', password: '' } })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    // Router.push('/')
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>U-GO | Sign in</title>
      </Head>

      <header className={styles.header}>
        <button type="button" onClick={() => Router.push('/auth/sign-up')}>
          Sign up
        </button>
      </header>

      <main className={styles.main}>
        <Image
          src="/logo-2.png"
          alt="logo"
          width={150}
          height={200}
          layout="fixed"
          className={styles.logo}
        />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            register={register('email', { required: 'Email is required' })}
            errors={errors.email}
          />

          <Input
            type="password"
            placeholder="Password"
            register={register('password', { required: 'Password is required' })}
            errors={errors.password}
          />

          <ButtonSubmit>Sign in</ButtonSubmit>
        </form>
      </main>
    </>
  )
}

export default Home
