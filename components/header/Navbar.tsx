'use client'

import NavLink from './NavLink'

import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session, status } = useSession()

  console.log(session, status)

  return (
    <nav className='border-gray-200 bg-[#190F31] px-4 py-4'>
      <ul className='flex justify-end gap-4'>
        <NavLink href='/'>Reportes</NavLink>
        <NavLink href='/'>Sensores</NavLink>
        <NavLink href='/alarmas'>Alarmas</NavLink>
      </ul>
      {session && <button onClick={() => signOut()}>Sign out</button>}
    </nav>
  )
}

export default Navbar
