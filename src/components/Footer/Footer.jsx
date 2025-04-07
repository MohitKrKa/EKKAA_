import React from "react";
import talktoExpert from "/Footer/talktoExpert.svg";
import line from "/Footer/Line.svg";
import line1 from "/Footer/Line1.svg";
import logo from "/Footer/Logo.png";
import socialIcon from "/Footer/socialIcon.svg";
import socialIcon1 from "/Footer/socialIcon1.svg";
import emailIcon from "/Footer/emailIcon.png";
import callIcon from "/Footer/callIcon.png";
import locationIcon from "/Footer/locationIcon.png";
import emailButton from "/Footer/emailButton.svg";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const DesktopFooter = () => (
    <div className="flex relative flex-col  h-auto  text-white bg-gradient-to-r to-[#0F2E61] from-[#0F5261] max-md:px-10 max-md:py-0">
      <div className="flex flex-col items-center justify-center px-20 py-10">
        <h1 className="mb-4 text-5xl text-[#FFFFFF] font-[Poppins] font-[275] max-sm:text-4xl">
          Planning for the next big step?
        </h1>
        <span className="mb-9 text-xl text-[#FFFFFF] font-[Poppins] font-[400] max-sm:text-4xl">
          We can help you navigate toward your business goals.
        </span>
        <button className="flex relative pr-12 items-center px-5 py-2.5 text-base cursor-pointer sm:mr-0 mr-4">
          <img src={talktoExpert} alt="" className="absolute" />
          <span className="ml-5 text-white">Talk to expert</span>
        </button>
        <img src={line1} alt="" className="mt-12 w-full" />
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          <img src={logo} alt="Ekkaa Logo" className="w-20 object-left mb-4" />
          <span className=" font-[SF Pro Display]font-[300] text-base">
            Ekkaa Electronics powers <br /> experiences that shape <br />{" "}
            everyday life.
          </span>
          <div className="flex flex-row mt-10 gap-4">
            <img src={socialIcon} alt="" className="w-8 cursor-pointer" />
            <img src={socialIcon1} alt="" className="w-8 cursor-pointer" />
          </div>
        </div>
        <img src={line} alt="" className="w-1 ml-10 mr-10 h-72" />

        <div className="flex flex-col ml-12">
          <h1 className="font-[Poppins] text-[2rem] font-[300] ">
            Quick Links
          </h1>
          <div className="flex flex-col mt-10 gap-4">
            <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
              Services
            </span>
            <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
              Our Products
            </span>
            <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
              About us
            </span>
            <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
              Carrer
            </span>
          </div>
        </div>

        <img src={line} alt="" className="w-1 ml-10 mr-10 h-72" />
        <div className="flex flex-col ml-12">
          <h1 className="font-[Poppins] text-[2rem] font-[300] ">Contact</h1>
          <div className="flex flex-col mt-10 gap-4">
            <div className="flex items-center gap-2 -ml-1 cursor-pointer font-[Poppins] font-[300] text-base">
              <img src={emailIcon} alt="" className="w-7" />
              Query.ekkaa@gmail.com
            </div>
            <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
              <img src={callIcon} alt="" className="w-5" />
              +91 8527197251 (Kundli)
            </div>
            <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
              <img src={locationIcon} alt="" className="w-5" />
              Sonipat, Haryana
            </div>
            <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
              <img src={callIcon} alt="" className="w-5" />
              +91 9138953303
            </div>
            <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
              <img src={locationIcon} alt="" className="w-5" />
              Noida, UP
            </div>
          </div>
        </div>
        <img src={line} alt="" className="w-1  ml-10 mr-10 h-72" />
        <div className="flex flex-col ml-12">
          <h1 className="font-[Poppins] text-[2rem] font-[300] ">Newsletter</h1>

          <div className="flex felx-col mt-10 relative justify-center items-center">
            <input
              type="text"
              className="w-56 border text-[#8A8A8A] p-2 border-[#BCDFDE40] h-10"
              placeholder="Email Address"
            />
            <img
              src={emailButton}
              alt=""
              className="w-7 absolute right-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <img src={line1} alt="" className="mt-12 w-full" />
      <div className="flex flex-row justify-between m-6 font-[Poppins] text-[#C6C6C6]">
        <span>
          © Ekkaa Electronics Industries Pvt. Ltd. All Rights Reserved.
        </span>
        <span>Privacy Policy . Terms & Conditions</span>
      </div>
    </div>
  );

  const MobileFooter = () => (
    <div className="flex relative flex-col h-auto text-white bg-[#080E1C] px-6 py-8">
      <div className="flex flex-col items-center justify-center py-6">
        <h1 className="mb-3 text-3xl text-center text-[#FFFFFF] font-[Poppins] font-[275]">
          Planning for the next big step?
        </h1>
        <span className="mb-6 text-lg text-center text-[#FFFFFF] font-[Poppins] font-[400]">
          We can help you navigate toward your business goals.
        </span>
        <button className="flex relative pr-12 items-center px-5 py-2.5 text-base cursor-pointer sm:mr-0 mr-4">
          <img src={talktoExpert} alt="" className="absolute" />
          <span className="ml-5 text-white">Talk to expert</span>
        </button>
        <img src={line1} alt="" className="mt-8 w-full" />
      </div>
      <div className="flex flex-col items-center mt-6">
        <img src={logo} alt="Ekkaa Logo" className="w-16 mb-3" />
        <span className="font-[SF Pro Display]font-[300] text-sm text-center mb-6">
          Ekkaa Electronics powers experiences that shape everyday life.
        </span>
        <div className="flex flex-row mt-2 gap-3">
          <img src={socialIcon} alt="" className="w-6 cursor-pointer" />
          <img src={socialIcon1} alt="" className="w-6 cursor-pointer" />
        </div>
      </div>
      <img src={line} alt="" className="w-full my-8 h-[1px]" />

      <div className="flex flex-col items-center mb-8">
        <h1 className="font-[Poppins] text-[1.5rem] font-[300] mb-4">
          Quick Links
        </h1>
        <div className="flex flex-col items-center gap-3">
          <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
            Services
          </span>
          <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
            Our Products
          </span>
          <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
            About us
          </span>
          <span className=" font-[Poppins] font-[300] text-base cursor-pointer">
            Carrer
          </span>
        </div>
      </div>

      <img src={line} alt="" className="w-full my-8 h-[1px]" />
      <div className="flex flex-col items-center mb-8">
        <h1 className="font-[Poppins] text-[1.5rem] font-[300] mb-4 text-center">
          Contact
        </h1>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
            <img src={emailIcon} alt="" className="w-6" />
            Query.ekkaa@gmail.com
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
            <img src={callIcon} alt="" className="w-5" />
            +91 8527197251
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
            <img src={locationIcon} alt="" className="w-5" />
            Sonipat, Haryana
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
            <img src={callIcon} alt="" className="w-5" />
            +91 9138953303
          </div>
          <div className="flex items-center gap-2 cursor-pointer font-[Poppins] font-[300] text-base">
            <img src={locationIcon} alt="" className="w-5" />
            Noida, UP
          </div>
        </div>
      </div>
      <img src={line} alt="" className="w-full my-8 h-[1px]" />
      <div className="flex flex-col items-center">
        <h1 className="font-[Poppins] text-[1.5rem] font-[300] mb-4">
          Newsletter
        </h1>
        <div className="flex felx-col relative justify-center items-center">
          <input
            type="text"
            className="w-48 border text-[#8A8A8A] p-2 border-[#BCDFDE40] h-9 text-sm"
            placeholder="Email Address"
          />
          <img
            src={emailButton}
            alt=""
            className="w-6 absolute right-1 cursor-pointer"
          />
        </div>
      </div>
      <img src={line1} alt="" className="mt-8 w-full" />
      <div className="flex flex-col items-center text-center py-4 font-[Poppins] text-[#C6C6C6] text-sm">
        <span>© Ekkaa Electronics Industries Pvt. Ltd.</span>
        <span>All Rights Reserved.</span>
        <div className="flex gap-4 mt-2">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isDesktop && <DesktopFooter />}
      {isMobile && <MobileFooter />}
    </>
  );
};

export default Footer;
