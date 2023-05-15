'use client'

import { useRef } from 'react'
import RadioButton from '../components/form/RadioButton'
import { IFachadaServer } from '@/logica/IFachadaServer'
import { FachadaServer } from '@/logica/FachadaServer'

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData) as Record<string, string>
    console.log(data)
    if (!checkFormValidity(data)) {
      console.log('Form is invalid')
      return
    }

    const { zona, modelo, identificador } = data
    const sensor: Sensor = {
      zona,
      modelo,
      identificador,
    }

    const facServer: IFachadaServer = new FachadaServer()
    facServer.postSensor(sensor)

    e.currentTarget.reset()
  }

  const checkFormValidity = (data: Record<string, string>): boolean => {
    const errors = []
    const requiredFields = ['zona', 'modelo', 'identificador']
    requiredFields.forEach(field => {
      if (!data[field]) {
        console.log(`Field ${field} is required`)
        errors.push(field)
      }
    })
    return errors.length === 0
  }

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <form
        className='flex flex-col items-center justify-center gap-12'
        onSubmit={handleFormSubmit}
      >
        <div className='bg-[#190F31] text-white mt-16 px-8 py-8 w-[450px] h-[220px] mx-auto rounded flex flex-col justify-between text-lg'>
          <div className='grid items-center h-full grid-cols-3 gap-12'>
            <RadioButton id='Area-a' name='zona' value='Area A' />
            <RadioButton id='Area-b' name='zona' value='Area B' />
            <RadioButton id='Area-c' name='zona' value='Area C' />
            <RadioButton id='Area-d' name='zona' value='Area D' />
            <RadioButton id='Area-e' name='zona' value='Area E' />
            <RadioButton id='Area-f' name='zona' value='Area F' />
          </div>
        </div>
        <div className='bg-[#190F31] text-white px-4 py-2 w-min mx-auto rounded flex flex-col justify-between text-lg gap-4'>
          <div className='flex items-center justify-center gap-2'>
            <label htmlFor='identificador' className='text-xl font-semibold'>
              Identificador:
            </label>
            <input
              type='text'
              id='identificador'
              name='identificador'
              className='bg-[#261F4B] px-4 py-2 rounded-2xl text-center focus:outline-none'
              placeholder='Identificador'
            />
          </div>
          <div className='flex items-center justify-end gap-2'>
            <label htmlFor='modelo' className='text-xl font-semibold'>
              Modelo:
            </label>
            <input
              type='text'
              id='modelo'
              name='modelo'
              className='bg-[#261F4B] px-4 py-2 rounded-2xl text-center focus:outline-none'
              placeholder='Modelo'
            />
          </div>
        </div>
        <button className='mx-auto text-white bg-[#3F238C] px-2 py-2 w-28 h-10 rounded'>
          Guardar
        </button>
      </form>
    </main>
  )
}
