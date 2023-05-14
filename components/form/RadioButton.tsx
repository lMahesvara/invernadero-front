import React from 'react'

type RadioButtonProps = {
  id: string
  name: string
  value: string
}

const RadioButton = ({ id, name, value }: RadioButtonProps) => {
  return (
    <div className='w-full h-full'>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        className='hidden peer'
      />
      <label
        htmlFor={id}
        className='flex flex-1 items-center justify-center bg-[#261F4B] px-4 py-2 rounded hover:bg-[#6C30BA] peer-checked:bg-[#6C30BA] peer-checked:text-white cursor-pointer transition-all duration-100 ease-in-out'
      >
        {value}
      </label>
    </div>
  )
}

export default RadioButton
