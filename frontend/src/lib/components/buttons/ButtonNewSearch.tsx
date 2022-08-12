import Router from 'next/router'
import { FaPlane } from 'react-icons/fa'

export function ButtonNewSearch() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-3 p-5 px-16 text-3xl font-bold transition-all border rounded-full border-bright-turquoise text-bright-turquoise hover:bg-bright-turquoise hover:text-white"
      onClick={() => Router.push('/')}
    >
      New Search! <FaPlane style={{ transform: 'rotate(-45deg)' }} />
    </button>
  )
}
