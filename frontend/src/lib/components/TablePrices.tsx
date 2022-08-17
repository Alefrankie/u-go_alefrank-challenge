import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FaCog } from 'react-icons/fa'
import { useFlightsContext } from '../contexts/FlightsContext'
import { ButtonFlightDetail } from './buttons/ButtonFlightDetail'
import { Loading } from './Loading/Loading'
dayjs.extend(duration)
dayjs.extend(relativeTime)

export function TablePrices() {
  const { prices, error } = useFlightsContext()

  if (error) {
    return (
      <main className="relative overflow-x-auto text-center ">
        <p className="text-2xl text-red-600">{error.message}</p>
      </main>
    )
  }

  if (!prices) {
    return <Loading />
  }

  return (
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
                Travel Time
              </th>
              <th scope="col" className="flex items-center gap-4 px-8 py-3 border">
                Options <FaCog />
              </th>
            </tr>
          </thead>
          <tbody>
            {prices.map((e, index: number) => (
              <tr key={index} className="text-2xl border-b">
                <td
                  scope="row"
                  className="px-8 py-4 font-medium whitespace-nowrap text-bright-turquoise"
                >
                  {e.origin} / {e.destination}
                </td>
                <td className="px-8 py-4 font-semibold border">{e.price}</td>
                <td className="px-8 py-4 font-semibold border">{e.main_airline.name}</td>
                <td className="px-8 py-4 font-semibold border">
                  {dayjs(e.depart_date).format('DD/MM/YYYY HH:mm')}
                </td>
                <td className="px-8 py-4 font-semibold border">
                  {dayjs.duration(e.durationInHours, 'hours').humanize(false)}
                </td>
                <td className="px-8 py-4 font-semibold border">
                  <ButtonFlightDetail />
                </td>
              </tr>
            ))}

            {!prices.length && (
              <tr className="text-4xl text-center border-b ">
                <th colSpan={6} className="p-12">
                  Not found results to your search
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
