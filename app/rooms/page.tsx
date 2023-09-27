"use client"

import Carousel from '@/components/Carousel'
import React from 'react'
import Image from 'next/image'

const Rooms = () => {
  return (
    <div>
      <div className="text-black  text-4xl xl:text-6xl font-bold text-center z-0">
            Reserve a room!
      </div>

      <div>
        <div>
          Rooms
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis doloremque perspiciatis modi ea expedita excepturi, mollitia nihil quidem tempora numquam incidunt consectetur possimus veritatis architecto explicabo nisi dolorum exercitationem!
        </div>
        <div className="p-10 font-bold text-5xl text-center">
          Room types
        </div>
        <div id="sveSlike" className="flex flex-col items-center">
          <div id="redSlike" className="flex flex-col md:flex-row gap-10 p-10 ">
            <div id="jednaSlika">
              <Image src="/images/imagesRooms/economyTwin.jpg" alt="economyTwin" width="400" height="400" />
              <div className="text-lg text-center font-bold">Economy twin</div>
            </div>
            <div id="jednaSlika">
            <Image src="/images/imagesRooms/economyDouble.jpg" alt="economyTwin" width="400" height="400" />
              <div className="text-lg text-center font-bold">Economy double</div>
            </div>
            <div id="jednaSlika">
            <Image src="/images/imagesRooms/standardTwin.jpg" alt="economyTwin" width="400" height="400" />
              <div className="text-lg text-center font-bold">Standard twin</div>
            </div>
          </div>
          <div id="redSlike" className="flex flex-col md:flex-row gap-10 p-10">
            <div id="jednaSlika">
            <Image src="/images/imagesRooms/standardDouble.jpg" alt="economyTwin" width="400" height="400" />
              <div className="text-lg text-center font-bold">Standard double</div>
            </div>
            <div id="jednaSlika">
            <Image src="/images/imagesRooms/superiorTwin.jpg" alt="economyTwin" width="400" height="400" />
            <div className="text-lg text-center font-bold">Superior twin</div>
            </div>
            <div id="jednaSlika">
            <Image src="/images/imagesRooms/superiorDouble.jpg" alt="economyTwin" width="400" height="400" />
              <div className="text-lg text-center font-bold">Superior double</div>
            </div>
          </div>
          <div id="redSlike" className="flex flex-col md:flex-row gap-10 p-10">
            <div id="jednaSlika">
            <Image src="/images/imagesRooms/juniorSuiteTwin.jpg" alt="economyTwin" width="400" height="400" />
              <div className="text-lg text-center font-bold">Junior suite twin</div>
            </div>
            <div id="jednaSlika">
            <Image src="/images/imagesRooms/juniorSuiteDouble.jpg" alt="economyTwin" width="400" height="400" />
              <div className="text-lg text-center font-bold">Junior suite double</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms