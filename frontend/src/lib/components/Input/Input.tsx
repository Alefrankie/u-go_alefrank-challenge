import styles from './styles.module.css'

interface IProps {
  placeholder: string
  type?: string
}
export function Input({ placeholder, type = 'text' }: IProps) {
  return <input type={type} placeholder={placeholder} className={styles.input} />
}
