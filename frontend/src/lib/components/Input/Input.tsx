import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

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
        className="w-full p-4 text-3xl text-center border rounded-full focus:outline-none border-vivid-cerulean placeholder:text-vivid-cerulean text-vivid-cerulean"
        list={placeholder}
        {...register}
        {...rest}
      />
      {errors?.message}
    </>
  )
}
