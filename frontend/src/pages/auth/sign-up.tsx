import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { FormEvent } from 'react'
import styles from '@styles/auth.module.css'
import { Input } from '@components/Input/Input'
import { ButtonSubmit } from '@components/buttons/ButtonSubmit'

const Home: NextPage = () => {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    Router.push('/')
  }

  return (
    <>
      <Head>
        <title>U-GO | Sign up</title>
      </Head>

      <header className={styles.header}>
        <button type="button" onClick={() => Router.push('/auth/sign-in')}>
          Sing In
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
        <form className={styles.form} onSubmit={onSubmit}>
          <Input placeholder="Your name" />
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <ButtonSubmit>Create Account</ButtonSubmit>
        </form>
      </main>
    </>
  )
}

export default Home
