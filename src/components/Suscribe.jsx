import React from "react";
import Image from "next/image";

import main from "../Assets/main-logo.png";

export default function Suscribe(){
    return (
      <>
       <div className="flex max-lg:flex-col w-[100%] text-white bg-black ">

          <div className="w-[30%] max-lg:w-[100%] justify-center flex items-center">
            <div>
              <h1 className="w-[250px] text-[25px]">20% DISCOUNT FOR NEW SUSCRIBERS</h1>
              <input placeholder="Enter Your Email" className="border border-black" />
              <button>SUSCRIBE</button>
            </div>
          </div>
<div className="flex justify-between ">
   <div className="  p-3 max-md:text-[13px]">
            <h1 className="text-[20px] pt-2">HELP & INFO</h1>
            <p className="pt-2">TRACK YOUR ORDER</p>
            <p className="pt-2">RETURN + EXCHANGE</p>
            <p className="pt-2">SHIPPING DELIVERY</p>
            <p className="pt-2">CONTACT US</p>
            <p className="pt-2">FIND US EASY</p>
          </div>

          <div className="  p-3 max-md:text-[13px]">
            <h1 className="text-[20px]">QUICK LINKS</h1>
            <p className="pt-2 ">HOME</p>
            <p className="pt-2">ABOUT</p>
            <p className="pt-2">SINGLE TEAM</p>
            <p className="pt-2">CONTACT</p>
            <p className="pt-2">SERVICES</p>
          </div>

          <div className="  p-3 max-md:text-[13px]">
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
