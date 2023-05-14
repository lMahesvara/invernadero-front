import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className='border-gray-200 bg-[#190F31] px-4 py-4'>
      <ul className='flex justify-end gap-4'>
        <NavLink href='/'>Reportes</NavLink>
        <NavLink href='/'>Sensores</NavLink>
        <NavLink href='/alarmas'>Alarmas</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
