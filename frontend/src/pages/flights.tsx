import { ButtonFlightDetail } from '@components/buttons/ButtonFligthDetail'
import { ButtonNewSearch } from '@components/buttons/ButtonNewSearch'
import type { NextPage } from 'next'
import Image from 'next/image'
import Router from 'next/router'
import { FormEvent } from 'react'
import { FaCog, FaPlane, FaTimes } from 'react-icons/fa'

const Home: NextPage = () => {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    Router.push('/flights')
  }

  return (
    <>
      <header className="flex items-center gap-6 p-10 mb-3" test-id="header">
        <Image src="/logo-1.png" alt="logo" width={100} height={100} layout="fixed" />

        <span className="text-3xl font-bold text-vivid-cerulean grow">
          YOUR FLIGHTS FROM LAX TO CANCUN UNDER $150
        </span>

        <ButtonNewSearch />
      </header>

      <main>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-gray-500">
            <thead className="text-2xl text-gray-700 uppercase border bg-gray-50">
              <tr>
                <th scope="col" className="px-8 py-3 border">
                  From/To
                </th>
                <th scope="col" className="px-8 py-3 border">
                  Cost $
                </th>
                <th scope="col" className="px-8 py-3 border">
                  Operated By
                </th>
                <th scope="col" className="px-8 py-3 border">
                  Date/Time
                </th>
                <th scope="col" className="px-8 py-3 border">
                  Travel Tim
                </th>
                <th scope="col" className="flex items-center gap-4 px-8 py-3 border">
                  Options <FaCog />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-2xl border-b">
                <td
                  scope="row"
                  className="px-8 py-4 font-medium whitespace-nowrap text-bright-turquoise"
                >
                  LAX CANCUN
                </td>
                <td className="px-8 py-4 font-semibold border">$190</td>
                <td className="px-8 py-4 font-semibold border">$Delta</td>
                <td className="px-8 py-4 font-semibold border">Delta</td>
                <td className="px-8 py-4 font-semibold border">Delta</td>
                <td className="px-8 py-4 font-semibold border">
                  <ButtonFlightDetail />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default Home
