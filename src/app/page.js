'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from '@/app/Navbar'
import Homep from '@/components/Home'
import sImg from "@/Assets/ban2.png"
import NewArrivals from "@/components/NewArrivals";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import MenW from "@/components/MenW";
import Brands from "@/components/Brands";
import Suscribe from "@/app/Suscribe";
import AOSWarapper from "@/components/AOSWarapper";

export default function Home() {

  const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date('2023-05-01').getTime(); // Set the target date here
    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds
    const initialTime = countdownDate + oneYearInMilliseconds; // Add instead of subtract
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = initialTime - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  

  return (
    <div className=" text-black" style={{ fontFamily: "ptserifr", backgroundColor: "" }}>
      <AOSWarapper />
      <Navbar />
      <Homep />
      <NewArrivals />
      <section className="h-[100%] max-custom-sm3:h-[100%] bg-black mt-16 flex max-custom-sm3:flex-col">
        <div className="w-[50%] max-custom-sm3:w-[100%]  flex justify-start items-start">
          <Image src={sImg} data-aos="fade-up" data-aos-duration="800"  className="h-[80vh] max-sm:h-[60vh] 
          max-lg:h-[75vh] max-lg:pt-20 max-custom-sm3:flex max-custom-sm3:pt-0 max-custom-sm3:justify-center
           max-custom-sm3:items-center object-contain" />
        </div>

        <div className="text-white relative max-custom-sm3:p-3 flex flex-col justify-center max-sm:items-center
          w-[50%] max-custom-sm3:w-[100%]">
          <h1 className="text-white  max-lg:text-center max-xl:text-[50px] max-lg:text-[40px]
             max-custom-sm3:text-[35px] font-rbt3 text-[60px] w-full">UP TO 45% OFFERS
          </h1>

          <p className="text-white font-rbt5 max-lg:text-center max-md:w-[100%] text-[20px] 
            max-sm:text-[13px] w-[90%]">
            A fashion store is a retail establishment that specializes in clothing and
            accessories. Fashion stores can range from small boutiques to large department stores and
            can sell wide range
          </p>

          <div className="flex max-sm:hidden font-rbt3 justify-between  max-md:justify-center max-md:w-[100%] 
            max-custom-sm3:flex-nowrap flex-wrap pt-10 w-10/12 max-custom-sm3:w-3/5">
            <span className="rounded-full hover:bg-white hover:text-black transition-opacity 
              duration-500 h-32 max-lg:h-24 max-lg:w-24 text-center max-sm:text-[15px] text-[40px] flex-col
              max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">
                {countdown.days}<br/>  <p className="text-[13px]">DAYS</p>
            </span>

            <span className="rounded-full  hover:bg-white hover:text-black transition-opacity 
              duration-500 text-center h-32 max-lg:h-24  max-lg:w-24 max-sm:text-[15px] flex-col text-[40px]
              max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">
                {countdown.hours}<br/> <p className="text-[13px]">HOURS</p>
            </span>

            <span className="rounded-full  hover:bg-white hover:text-black transition-opacity
              duration-500 h-32  text-[40px] flex-col text-center max-lg:h-24 max-sm:text-[15px] max-lg:w-24
              max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">
                {countdown.minutes}<br/>  <p className="text-[13px]">MINS</p>
            </span> 

            <span className="rounded-full  hover:bg-white hover:text-black transition-opacity 
              duration-500 h-32  text-[40px] flex-col text-center max-lg:h-24 max-sm:text-[15px] max-lg:w-24 
              max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">
                {countdown.seconds}<br/>  <p className="text-[13px]">SECS</p>
            </span>
          </div>
          
          <Link href="/shop">
            <button className="p-4 max-sm:p-3 border-2 w-[200px] mt-5 max-sm:text-[15px] 
            border-white max-md:m-auto max-md:my-4 rounded-md flex justify-between items-center
               max-sm:bg-black max-sm:text-white font-rbt1">
                SHOP NOW 
                <BsArrowRight size={40} className="bg-white rounded-full text-black max-sm:text-black" 
                style={{padding:"13px"}} />
            </button>
          </Link>
        </div>
      </section>
      <section>
        <MenW />
      </section>
      <Brands />
      <Suscribe />
    </div>
  );
}
