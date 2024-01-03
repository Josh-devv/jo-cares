'use client'
import React from "react";
import Image from "next/image";
import logo from "../Assets/Logo.svg";
import dhl from "../Assets/dhl-logo.png";
import visa from "../Assets/visa-card.png";
import { FaFacebook, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";
export default function Suscribe(){
    return (
      <>
      <div className="flex font-rbt1  justify-between items-center max-md:flex-col w-[100%] text-black border border-t-black ">
        <div className="w-[20%] flex  justify-center max-sm:self-start max-sm:pl-3 max-md:py-7 max-sm:w-[30%]"><Image src={logo} /></div>
        
        <div className="flex w-[100%] max-md:w-[100%] justify-evenly max-md:flex-wrap max-md:justify-start">
          <div className="p-3 text-[13px] max-lg:text-[13px]">
            <h1 className="text-[17px] ">OTHER PAGES</h1>
            <p className="pt-2">Home</p>
            <p className="pt-2">Category</p>
            <p className="pt-2">Contact</p>
            <p className="pt-2">Pricing</p>
            <p className="pt-2">Pages</p>
          </div>

          <div className="p-3 text-[13px] max-lg:text-[13px]">
            <h1 className="text-[17px]">SUPPORT</h1>
            <p className="pt-2 ">Contact Us</p>
            <p className="pt-2">About Us</p>
            <p className="pt-2">Refund Policy</p>
            <p className="pt-2">Terms & Conditions</p>
            <p className="pt-2">Privacy Policy</p>
          </div>

          <div className="p-3 text-[13px] max-lg:text-[13px]">
            <h1 className="text-[17px]">CONTACT US</h1>
            <p className="pt-2">Do you have any suggestions ?</p>
            <p className="pt-2">contact @yourcompany.com</p>
            <p className="pt-2 w-3/4">Do you need support? Give us a call. +44 435 4564</p>
          </div>
      </div>
    </div>

    <div className=" flex justify-between border py-5 border-t-black">
      <div className="flex w-[20%] justify-evenly">
        <FaFacebook size={20}/>
        <FaTwitter size={20}/>
        <FaYoutube size={20}/>
        <FaBehance size={20}/>
      </div>
      <div className="flex w-[30%] justify-evenly">
        <Image src={visa} />
        <Image src={dhl} />
      </div>
    </div>
  </>
    
      
    
     
    );
}
