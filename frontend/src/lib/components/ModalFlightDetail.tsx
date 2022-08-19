import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import { useCurrencyFormat } from '../hooks/useFormatCurrency'
import { IPrice } from '../interfaces/IPrice'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(duration)
dayjs.extend(relativeTime)

Modal.setAppElement('#__next')

interface IProps {
  price: IPrice
}

export function ModalFlightsDetails({ price }: IProps) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button
        type="submit"
        onClick={openModal}
        className="flex items-center justify-center p-2 gap-3 rounded-full bg-vivid-cerulean text-white font-bold w-full hover:bg-[#5abff9] transition-all"
      >
        BOOK NOW!
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%'
          }
        }}
      >
        <div className="p-10 text-center">
          <Image src="/logo-1.png" alt="logo-2" width={100} height={100} />
          <h2 className="text-5xl font-bold text-vivid-cerulean">You are Booked!</h2>
        </div>

        <div className="flex flex-col gap-8 pb-16 pl-10 text-3xl font-semibold">
          <div>Flight Number: {}</div>
          <div>
            From - To:{price.origin} / {price.destination}
          </div>
          <div>Date: {dayjs(price.depart_date).format('DD/MM/YYYY HH:mm')}</div>
          <div>Time: {dayjs.duration(price.durationInHours, 'hours').humanize(false)}</div>
          <div>Cost: {useCurrencyFormat(price.price)}</div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center p-2 gap-3 rounded-full bg-vivid-cerulean w-40 text-white font-bold hover:bg-[#5abff9] transition-all"
          >
            Done
          </button>
        </div>
      </Modal>
    </div>
  )
}
