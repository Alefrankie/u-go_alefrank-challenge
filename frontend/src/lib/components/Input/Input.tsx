import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import styles from './styles.module.css'

interface IProps {
  placeholder: string
  type?: string
  register: UseFormRegisterReturn<string>
  errors: FieldError | undefined
}
export function Input({ placeholder, type = 'text', register, errors, ...rest }: IProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...register}
        {...rest}
      />
      {errors?.message}
    </>
  )
}
