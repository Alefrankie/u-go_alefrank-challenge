/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'

export function Loading() {
  return (
    <figure className={styles.figure}>
      <img src="/loading.png" alt="loading" width={400} height={400} className={styles.loading} />
      <figcaption className={styles.figcaption}>Sit thigh! Looking for flights!</figcaption>
    </figure>
  )
}
