import React from 'react'
import Container from './Container'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div id="navbar" className="fixed w-full max-h-40 bg-teal-200 shadow-lg z-50">
      <div className="p-6 border-b-2">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <Logo />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar