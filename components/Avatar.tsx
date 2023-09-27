'use client'
import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <Image className="rounded-full" height="40" width="40" src="/images/avatar.png" alt="Avatar" />
  )
}

export default Avatar