import React from "react";
import Image from "next/image";
import news from '@/Assets/newsletter-image.jpg';
import main from "../Assets/main-logo.png";

export default function Suscribe(){
    return (
      <>
       <div className="flex-col h-[40vw]  relative max-sm:h-[100vw] flex justify-start items-start max-sm:justify-center max-sm:items-center ">
        <div className="flex justify-center absolute items-center">
          <Image src={news} className=" max-sm:h-[35vw]"/>
          <div className="z-10 absolute flex flex-col w-full justify-center items-center">
            <h1 className="text-[2.5vw]">SIGN UP FOR OUR NEWSLETTER</h1>
            <input type="text" placeholder="Your Email Address" className="w-1/2 max-sm:text-[1.6vw] p-3 max-md:p-2.5 max-sm:p-1 rounded-3xl"/>
            <button className="w-1/2 p-3 rounded-3xl bg-black text-white text-[1.5vw] max-sm:p-1  m-2">SIGN UP</button>
          </div>
        </div>
        <div className="absolute top-3/4 text-amber-800 bg-red-50 flex w-[100%] justify-evenly max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:justify-center max-lg:items-center ">
          <div className="w-[20%] max-lg:w-full">
            <Image src={main} className="pl-3"/>
            <p className="p-3 max-lg:w-full max-md:text-[13px] ">
              Gravida massa volutpat aenean odio. Amet, turpis
              erat nullam fringilla elementum diam in. Nisi, 
              purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            </p>
            <div></div>
          </div>

          <div className="w-[20%] max-lg:w-full p-3 max-md:text-[13px]">
            <h1 className="text-[20px] pt-2">HELP & INFO</h1>
            <p className="pt-2">TRACK YOUR ORDER</p>
            <p className="pt-2">RETURN + EXCHANGE</p>
            <p className="pt-2">SHIPPING DELIVERY</p>
            <p className="pt-2">CONTACT US</p>
            <p className="pt-2">FIND US EASY</p>
          </div>

          <div className="w-[20%] max-lg:w-full p-3 max-md:text-[13px]">
            <h1 className="text-[20px]">QUICK LINKS</h1>
            <p className="pt-2 ">HOME</p>
            <p className="pt-2">ABOUT</p>
            <p className="pt-2">SINGLE TEAM</p>
            <p className="pt-2">CONTACT</p>
            <p className="pt-2">SERVICES</p>
          </div>

          <div className="w-[20%] max-lg:w-full p-3 max-md:text-[13px]">
            <h1 className="text-[20px] pt-2">CONTACT US</h1>
            <p className="pt-2">Do you have any suggestions ?</p>
            <p className="pt-2">contact @yourcompany.com</p>
            <p className="pt-2 w-3/4">Do you need support? Give us a call. +44 435 4564</p>
          </div>
        </div>
      </div>

      
      </>
     
    );
}