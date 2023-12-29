'use client'
import React from "react";
import Image from "next/image";
import Navbar from '@/components/Navbar'
import Homep from '@/components/Home'
import sImg from "@/Assets/ban2.png"
import NewArrivals from "@/components/NewArrivals";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import MenW from "@/components/MenW";
import Brands from "@/components/Brands";
import Suscribe from "@/components/Suscribe";

export default function Home() {
  const [all, setAll] =useState([])
  
  useEffect(()=>{
    const fetchData = async () => {
      const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=tshirt&currency=USD&sizeSchema=US&lang=en-US';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f71d2a5c79msh54724eb70b12fa9p1c0d01jsn6e622751224a',
          'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setAll(result.products)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); // Call the asynchronous function to fetch the data
  }, []); 



  return (
    <div className=" text-black" style={{ fontFamily: "ptserifr", backgroundColor: "" }}>
      <Navbar />
      <Homep />
      <NewArrivals />
      <section className="h-[100%] max-custom-sm3:h-[100%] bg-black mt-16 flex max-custom-sm3:flex-col">
        <div className="w-[50%] max-custom-sm3:w-[100%]  flex justify-start items-start">
          <Image src={sImg}  className="h-[80vh] max-sm:h-[60vh] max-lg:h-[75vh] max-lg:pt-20 max-custom-sm3:flex max-custom-sm3:pt-0 max-custom-sm3:justify-center max-custom-sm3:items-center object-contain" />
        </div>
        <div className="text-white relative max-custom-sm3:p-3 flex flex-col justify-center items-start w-[50%] max-custom-sm3:w-[100%]">
          <h1 className="text-white max-md:text-center max-xl:text-[50px] max-lg:text-[40px] max-custom-sm3:text-[35px] font-rbt text-[60px] w-full">UP TO 45% OFFERS</h1>
          <p className="text-white max-md:text-center max-md:w-[100%] text-[20px] w-10/12"> A fashion store is a retail establishment that specializes in clothing and
            accessories. Fashion stores can range from small boutiques to large department stores and can sell wide range
          </p>
          <div className="flex justify-between max-md:justify-center max-md:w-[100%] max-custom-sm3:flex-nowrap flex-wrap pt-10 w-10/12 max-custom-sm3:w-3/5">
            <span className="rounded-full h-32 max-lg:h-24 max-lg:w-24 text-center max-sm:text-[15px] text-[20px] max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">365<br/> DAYS</span>
            <span className="rounded-full text-center h-32 max-lg:h-24 max-lg:w-24 max-sm:text-[15px] text-[20px] max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">365<br/> HOURS</span>
            <span className="rounded-full h-32  text-[20px] text-center max-lg:h-24 max-sm:text-[15px] max-lg:w-24 max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">365<br/> MINS</span> 
            <span className="rounded-full h-32  text-[20px] text-center max-lg:h-24 max-sm:text-[15px] max-lg:w-24 max-sm:h-20 max-sm:w-20 w-32 border flex justify-center items-center">365<br/> SECS</span>
          </div>
          <button className="p-4 max-sm:p-3 border-2 w-[200px] mt-5 max-sm:text-[15px] 
           border-white max-md:m-auto max-md:my-4 rounded-full flex justify-between
            items-center max-sm:bg-black max-sm:text-white font-rbt">
              SHOP NOW 
              <BsArrowRight size={40} className="bg-white rounded-full
               text-black max-sm:text-black" 
               style={{padding:"13px"}} />
          </button>
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
