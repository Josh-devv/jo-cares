import React from "react";
import Image from "next/image";
import news from '@/Assets/newsletter-image.jpg';
import main from "../Assets/main-logo.png";

export default function Suscribe(){
    return (
      <>
       <div className="flex-col h-[40vw] relative max-sm:h-[100vw] flex justify-start items-start max-sm:justify-center max-sm:items-center ">
        <div className="flex justify-center absolute items-center">
          <Image src={news} className=" max-sm:h-[25vw]"/>
          <div className="z-10 absolute flex flex-col w-full justify-center items-center">
            <h1 className="text-[2.5vw]">SIGN UP FOR OUR NEWSLETTER</h1>
            <input type="text" placeholder="Your Email Address" className="w-1/2 max-sm:text-[1.6vw] p-3 max-md:p-2.5 max-sm:p-1 rounded-3xl"/>
            <button className="w-1/2 p-3 rounded-3xl bg-black text-white text-[1.5vw] max-sm:p-1  m-2">SIGN UP</button>
          </div>
        </div>
        <div className="absolute top-3/4 flex w-[90%] justify-evenly items-evenly">
          <div className="w-[20%]">
            <Image src={main}/>
            <p>
              Gravida massa volutpat aenean odio. Amet, turpis
              erat nullam fringilla elementum diam in. Nisi, 
              purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            </p>
            <div></div>
          </div>

          <div>
            <h1>QUICK LINKS</h1>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>SINGLE TEAM</p>
            <p>CONTACT</p>
            <p>SERVICES</p>
          </div>
          <div>
            <h1>HELP & INFO</h1>
            <p>TRACK YOUR ORDER</p>
            <p>RETURN + EXCHANGE</p>
            <p>SHIPPING DELIVERY</p>
            <p>CONTACT US</p>
            <p>FIND US EASY</p>
          </div>
          <div>
            <h1>CONTACT US</h1>
            <p>Do you have any suggestions ?</p>
            <p>contact @yourcompany.com</p>
            <p>Do you need support? Give us a call. +44 435 4564</p>
            <p>CONTACT US</p>
            <p>FIND US EASY</p>
          </div>
        </div>
      </div>

      
      </>
     
    );
}