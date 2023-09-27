"use client";
import Carousel from '@/components/Carousel'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="text-black  text-4xl xl:text-6xl font-bold text-center z-0">
              Reserve a room!
        </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="mt-40">

      </div>
    </div>
  )
}
