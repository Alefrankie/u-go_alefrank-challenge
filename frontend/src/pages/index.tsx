import { ButtonSubmit } from '@components/buttons/ButtonSubmit'
import { Input } from '@components/Input/Input'
import styles from '@styles/home.module.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import Router from 'next/router'
import { FormEvent } from 'react'
import { FaPlane } from 'react-icons/fa'

const Home: NextPage = () => {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    Router.push('/flights')
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
        <form className={styles.form} onSubmit={onSubmit}>
          <Input placeholder="From" />
          <Input placeholder="To" />
          <Input placeholder="Max $" />
          <ButtonSubmit>
            Search flights <FaPlane style={{ transform: 'rotate(-45deg)' }} />
          </ButtonSubmit>
        </form>
      </main>
    </>
  )
}

export default Home
