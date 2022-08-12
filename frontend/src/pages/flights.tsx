import type { NextPage } from 'next'
import Image from 'next/image'
import Router from 'next/router'
import { FormEvent } from 'react'
import { FaCog, FaTimes } from 'react-icons/fa'

const Home: NextPage = () => {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    Router.push('/flights')
  }

  return (
    <>
      <header className="flex items-center mb-3 gap-6 p-10">
        <Image src="/logo-1.png" alt="logo" width={100} height={100} layout="fixed" />

        <span className="text-3xl font-bold text-vivid-cerulean">
          YOUR FLIGHTS FROM LAX TO CANCUN UNDER $150
        </span>
      </header>

      <main>
        <div className="overflow-x-auto relative">
          <table className="w-full text-left text-gray-500">
            <thead className="text-2xl text-gray-700 uppercase bg-gray-50 border">
              <tr>
                <th scope="col" className="py-3 px-6 border">
                  From/To
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Cost $
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Operated By
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Date/Time
                </th>
                <th scope="col" className="py-3 px-6 border">
                  Travel Tim
                </th>
                <th scope="col" className="py-3 px-6 border">
                  <FaCog />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-2xl">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium  whitespace-nowrap text-bright-turquoise"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="py-4 px-6 border font-semibold">LAX CANCUN</td>
                <td className="py-4 px-6 border font-semibold">$190</td>
                <td className="py-4 px-6 border font-semibold">$Delta</td>
                <td className="py-4 px-6 border font-semibold">Delta</td>
                <td className="py-4 px-6 border font-semibold">
                  <FaTimes />
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
