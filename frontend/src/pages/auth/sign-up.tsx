import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { FormEvent } from 'react'
import styles from '@styles/auth.module.css'
import { Input } from '@components/Input/Input'
import { ButtonSubmit } from '@components/buttons/ButtonSubmit'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loading } from '@components/Loading/Loading'

type Inputs = {
  name: string
  email: string
  password: string
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({ defaultValues: { email: '', password: '' } })

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
      <Head>
        <title>U-GO | Sign up</title>
      </Head>

      <header className={styles.header}>
        <button type="button" onClick={() => Router.push('/auth/sign-in')}>
          Sign In
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
            placeholder="Your name"
            register={register('name', { required: 'Name is required' })}
            errors={errors.name}
          />
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
          <ButtonSubmit>Create Account</ButtonSubmit>
        </form>
      </main>
    </>
  )
}

export default Home
