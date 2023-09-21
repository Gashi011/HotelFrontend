import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
        <img alt='logo' src="/images/Bababui.png" className="object-contain w-48 h-20 cursor-pointer"></img>
    </Link>
  )
}

export default Logo