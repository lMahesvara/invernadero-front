'use client'

import RadioButton from '../../components/form/RadioButton'
import { IFachadaServer } from '@/logica/IFachadaServer'
import { FachadaServer } from '@/logica/FachadaServer'

export default function Alarmas({ sensores }: { sensores: Sensor[] }) {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData) as Record<string, string>
    console.log(data)
    if (!checkFormValidity(data)) {
      console.log('Form is invalid')
      return
    }

    const { sensor, tipo, limInf, limSup } = data

    const alarma: Alarma = {
      tipo,
      limiteInferior: Number(limInf),
      limiteSuperior: Number(limSup),
      sensor,
    }

    const facServer: IFachadaServer = new FachadaServer()
    facServer.postAlarma(alarma)

    e.currentTarget.reset()
  }

  const checkFormValidity = (data: Record<string, string>): boolean => {
    const errors = []
    const requiredFields = ['sensor', 'tipo', 'limInf', 'limSup']
    requiredFields.forEach(field => {
      if (!data[field]) {
        console.log(`Field ${field} is required`)
        errors.push(field)
      }
    })
    return errors.length === 0
  }

  return (
    <form
      className='flex flex-col items-center justify-between gap-6 p-24'
      onSubmit={handleFormSubmit}
    >
      <div className='bg-[#190F31] text-white px-4 py-6 w-2/3 max-w-[500px]  mx-auto rounded flex flex-col justify-between text-lg'>
        <div className='flex flex-col gap-3 '>
          {sensores?.map(sensor => (
            <RadioButton
              key={sensor.id}
              id={sensor.id || sensor.identificador}
              name='sensor'
              value={sensor.identificador}
            />
          ))}
        </div>
      </div>
      <div className='w-full'>
        <div className='items-center mx-auto w-min text-sm font-medium  bg-[#190F31]  rounded-lg flex text-white gap-6 '>
          <div className='flex items-center w-full pl-3'>
            <input
              id='temperatura'
              type='radio'
              value=''
              name='tipo'
              className='w-4 h-4 bg-gray-600 border-gray-500 focus:ring-0 ring-offset-gray-700 focus:ring-offset-gray-700'
            />
            <label
              htmlFor='temperatura'
              className='w-full py-3 pr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Temperatura
            </label>
          </div>
          <div className='flex items-center pl-3'>
            <input
              id='humedad'
              type='radio'
              value=''
              name='tipo'
              className='w-4 h-4 bg-gray-600 border-gray-500 focus:ring-0 ring-offset-gray-700 focus:ring-offset-gray-700'
            />
            <label
              htmlFor='humedad'
              className='w-full py-3 pr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Humedad
            </label>
          </div>
        </div>
      </div>
      <div className='bg-[#190F31] text-white px-4 py-2 w-min mx-auto rounded flex flex-col justify-between gap-4'>
        <div className='flex items-center justify-center gap-2'>
          <label htmlFor='limInf' className='text-base font-semibold'>
            Límite Inferior:
          </label>
          <input
            type='number'
            id='limInf'
            name='limInf'
            className='bg-[#261F4B] px-4 py-2 rounded-2xl text-center focus:outline-none text-base'
            placeholder='12'
          />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <label htmlFor='limSup' className='text-base font-semibold'>
            Límite Superior:
          </label>
          <input
            type='number'
            id='limSup'
            name='limSup'
            className='bg-[#261F4B] text-base px-4 py-2 rounded-2xl text-center focus:outline-none'
            placeholder='34'
          />
        </div>
      </div>
      <button className='mx-auto text-white bg-[#3F238C] px-2 py-2 w-28 h-10 rounded'>
        Guardar
      </button>
    </form>
  )
}

Alarmas.getInitialProps = async () => {
  const facServer: IFachadaServer = new FachadaServer()
  const sensores = await facServer.getSensores()
  console.log(sensores || 'No hay sensores')
  return { sensores }
}
