import React from 'react'
import Container from './Container'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div>
        <Container>
          <div className="flex flex-row justify-between items-center">
            <Logo />
          </div>
        </Container>
    </div>
  )
}

export default Navbar