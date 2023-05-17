'use client'

import NavLink from './NavLink'

import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session, status } = useSession()

  console.log(session, status)

  if (!session) {
    return (
      <nav className='border-gray-200 bg-[#190F31] px-12 py-4 flex justify-end h-[76px]'></nav>
    )
  }

  return (
    <nav className='border-gray-200 bg-[#190F31] px-12 py-4 flex justify-end gap-8'>
      <ul className='flex justify-end gap-4'>
        <NavLink href='/'>Reportes</NavLink>
        <NavLink href='/sensores'>Sensores</NavLink>
        <NavLink href='/alarmas'>Alarmas</NavLink>
      </ul>
      {session && (
        <button
          className='text-white bg-[#402b72] rounded-xl px-2 py-1'
          onClick={() => signOut()}
        >
          Sign out
        </button>
      )}
    </nav>
  )
}

export default Navbar
