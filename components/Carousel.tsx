import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const CarouselProducts = () => {
  const slides = [
    {
      url: "https://wallpapercave.com/wp/wp38040.jpg",
    },
    {
      url: "https://wallpaperswide.com/download/hotel_room_2-wallpaper-3554x1999.jpg",
    },
    {
      url: "https://png.pngtree.com/background/20230424/original/pngtree-an-empty-conference-room-with-a-large-table-and-dark-curtains-picture-image_2457521.jpg",
    },
    {
        url: "https://wallpaperaccess.com/full/4717501.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  }


  let carouselText;
  let link;
  if (currentIndex === 0) {
    carouselText = "our Hotel";
    link = "/aboutus";
  } else if (currentIndex === 1) {
    carouselText = "our Rooms";
    link = "/rooms";
  } else if (currentIndex === 2) {
    carouselText = "our Conferentions";
    link = "/conferentions";
  } else if (currentIndex === 3) {
    carouselText = "Reservations";
    link = "/reservations"
  }

  return (
    <div className="h-[712px] md:h-[940px] w-full xl:w-[1500px] m-auto py-16 px-4 relative group pt-0 pb-60">
        <a href={link}>
      <div id="carouselTextProducts" className="text-6xl font-bold text-white items-center text-center pb-6">
        {carouselText}
      </div>
      </a>
      <div className="pb-10">
        <a href={link}>
      <div id="saznajViseO" className="flex flex-col justify-center mt-20 lg:mt-10 mb-10 lg:mb-0 w-[28rem] h-20 bg-teal-200 border border-white rounded-full text-2xl  text-black items-center m-auto cursor-pointer hover:text-white hover:bg-neutral-500 hover:scale-110">
        Learn more about {carouselText}
      </div>
      </a>
      </div>
      <div
        id="carouselImageProducts"
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize:"100% 100%" }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        
      >
        <a href={link} style={{ display: "block", width: "100%", height: "100%" }}>
          {/* ... (left and right arrows) */}
        </a>
        {/* Left Arrow */}
        <div className="absolute top-[450px] md:top-[600px] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white coursor cursor-pointer hover:text-teal-200 ">
          <BsChevronCompactLeft onClick={prevSlide} />
        </div>
        {/* Right arrow */}
        <div className="absolute top-[450px] md:top-[600px] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white coursor cursor-pointer hover:text-teal-200">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer hover:text-teal-200">
              <RxDotFilled />
            </div>
          ))}
        </div>
    </div>
  );
};

export default CarouselProducts;
