import React from "react";
import Logo from "./Logo";
import UnderFooter from "./UnderFooter";

const Footer = () => {
  return (
    <div>
      <div className="bg-white w-full h-200"></div>
      <div className="w-full h-0.5 bg-gray-300 mx-auto mb-4"></div>
      <div className="flex flex-col gap-10 shadow-md">
        <div className="flex flex-col lg:flex-row text-center mt-10 mb-10 justify-between lg:text-left items-center xl:items-start gap-10 xl:px-32">
          <div className="flex flex-col items-center ">
            <Logo />
            <p>
              Hotel Bababui, sa vama od sada
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Naša lokacija
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Ulica TaITa broj 2, 11000 Beograd, <br />
                Srbija
              </p>
              <a href="mailto:info@steelprotection.rs"><p>Mail: info@bababuimail.rs</p></a>
              <p>Tel: +381 63 111 1111</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Radno vreme
            </div>
            <div>
              <p>
                Otvoreni smo 24/7
                <br />
                Uvek ste dobrodošli
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Socijalne mreže
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Instagram <br />
                Facebook <br />
                TikTok <br />
                LinkedIn <br />
                </p>
            </div>
          </div>
        </div>
        <div className="relative"><UnderFooter /></div>
      </div>
    </div>
  );
};

export default Footer;
