import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}
export function ButtonSubmit({ children }: IProps) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center p-5 gap-3 rounded-full bg-bright-turquoise text-white font-bold text-3xl w-full hover:bg-[#03d5dd]"
    >
      {children}
    </button>
  )
}
