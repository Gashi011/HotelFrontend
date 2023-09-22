"use client";

import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { FcSearch } from 'react-icons/fc'
import Search from './Search'

const Navbar = () => {
  return (
    <div id="navbar" className="fixed w-full max-h-40 bg-teal-200 shadow-lg z-50">
      <div className="p-6 border-b-2">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <Logo />
            <div></div>
            <div className='md:w-40 xl:w-60'></div>
            <div className='flex flex-row'> <input className='lg:block text-xl md:text-sm xl:text-md font-bold rounded-lg cursor-pointer'></input><FcSearch size={32} /></div>
            
            <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/about">About us</a>
            </div>
            <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
              <div>
                <a href="/products">
                <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
                  Rooms
                </div>
                </a>
              </div>
            </div>
            <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/projects">Conferentions</a>
            </div>
            <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/news">Contact</a>
            </div>
            <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/contact">Reservations</a>
            </div>
            <div> <Search /></div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar