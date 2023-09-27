"use client";

import React, { useCallback, useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import Container from './Container'
import Logo from './Logo'
import { FcSearch } from 'react-icons/fc'
import Search from './Search'
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from './hooks/useRegisterModal';
import useLoginModal from './hooks/useLoginModal';

interface UserMenuProps {
  currentUser? : String
}

const Navbar: React.FC<UserMenuProps> = ({
  currentUser
}) => {


  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value: boolean) => !value)
}, [])

  return (
    <div id="navbar" className="fixed w-full max-h-40 bg-teal-200 shadow-lg z-50">
      <div className="p-6 border-b-2">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <Logo />
            <div></div>
            <div className='md:w-40 xl:w-60'></div>
            <div className='flex flex-row'> <input className='lg:block text-xl md:text-sm ml-3 xl:text-md font-bold rounded-lg cursor-pointer'></input><FcSearch size={32} /></div>
            
            <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
              <div>
                <a href="/rooms">
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
              <a href="/contact">Contact</a>
            </div>
            <div className="hidden lg:block text-xl sm:text-sm  xl:text-xl  font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/contact">Reservations</a>
            </div>
            <div> <Search /></div>
            <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-400 flex flex-row items-center gap-2 cursor-pointer hover:shadow-md transition ">
              <AiOutlineBars />
              <div className="hidden md:block">
                <Avatar />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-1/6
                        bg-white
                        overflow-hidden
                        right-0
                        top-24
                        text-sm
                    "
                >
                    <div className=" flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                            <MenuItem
                                onClick={() => {}}
                                label="Moja putovanja" 
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Omiljena putovanja" 
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Rezervisana putovanja" 
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Poklon putovanja" 
                            />
                            <hr />
                            {/* <MenuItem
                                onClick={() => signOut()}
                                label="Odjavi se" 
                            /> */}
                        </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label="Prijavi se" 
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Registruj se" 
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
    </div>
  )
}

export default Navbar