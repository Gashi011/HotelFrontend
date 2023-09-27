import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import ContactForms from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center pt-14 text-5xl md:text-7xl font-bold">
        Kontakt
      </div>
      <div className="flex flex-col lg:flex-row gap-10 pt-20 lg:ps-20 xl:pl-40 ">
        <div className="flex flex-col lg:flex-col lg:justify-start gap-5 lg:gap-5">
          <div className="w-full sm:w-2/3 mx-auto justify-center lg:w-[500px] h-40 bg-neutral-200 flex flex-col items-center shadow-inner gap-2">
            <p className="text-black text-lg font-bold">
              <BsTelephone />
            </p>
            <p className="text-black text-lg font-bold">+381 63 111 1111</p>
          </div>
          <div className="w-full sm:w-2/3 mx-auto justify-center lg:w-[500px] h-40 bg-neutral-200 flex flex-col items-center shadow-inner gap-2">
            <p className="text-black text-lg font-bold">
              <FaLocationDot />
            </p>
            <p className="text-black text-lg font-bold">
                Street TaITa number 2,  Beograd
            </p>
          </div>
          <div className="w-full sm:w-2/3 mx-auto justify-center lg:w-[500px] h-40 bg-neutral-200 flex flex-col items-center shadow-inner gap-2">
            <p className="text-black text-lg font-bold">
              <FaClock />
            </p>
            <p className="text-black text-lg font-bold">
              Open 24/7
            </p>
          </div>
        </div>
        <div className="w-4/5 sm:w-2/3 lg:w-1/2 mx-auto  h-[950px] bg-neutral-200 shadow-inner">
          <ContactForms />
        </div>
      </div>
    </div>
  );
};

export default Contact;
