import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className='text-white font-medium text-lg hover:bg-[#3F238C] px-4 py-2 rounded cursor-pointer'
    >
      {children}
    </Link>
  )
}

export default NavLink
