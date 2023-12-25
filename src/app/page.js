'use client'
import React from "react";
import Image from "next/image";
import Navbar from '@/components/Navbar'
import Homep from '@/components/Home'
import sImg from "@/Assets/ban2.png"
import NewArrivals from "@/components/NewArrivals";
import Suscribe from "@/components/Suscribe";
import { useEffect, useState } from "react";

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
      <section className="h-[80vh] max-custom-sm3:h-[100%] bg-black mt-16 flex max-custom-sm3:flex-col">
        <div className="w-[50%] max-custom-sm3:w-[100%]  flex justify-start items-start">
          <Image src={sImg}  className="h-[100vh] max-lg:h-[65vh] max-custom-sm3:flex max-custom-sm3:justify-center max-custom-sm3:items-center object-contain" />
        </div>
        <div className="text-white relative flex flex-col justify-center items-start w-[50%] max-custom-sm3:w-[100%]">
          <h1 className="text-white max-sm:text-center max-xl:text-[50px] max-lg:text-[40px] max-custom-sm3:text-[35px] font-rbt text-[60px] w-full">UP TO 45% OFFERS</h1>
          <p className="text-white max-sm:text-center max-sm:w-[90%] text-[20px] w-10/12"> A fashion store is a retail establishment that specializes in clothing and
            accessories. Fashion stores can range from small boutiques to large department stores and can sell wide range
          </p>
          <div className="flex justify-between max-sm:justify-center max-sm:w-11/12 flex-wrap pt-10 w-10/12 max-custom-sm3:w-3/5">
            <span className=" rounded-full h-24 text-[20px] w-24 border flex justify-center items-center">365 DAYS</span>
            <span className=" rounded-full h-24 text-[20px] w-24 border flex justify-center items-center">365 DAYS</span>
            <span className=" rounded-full h-24 text-[20px] w-24 border flex justify-center items-center">365 DAYS</span>
            <span className=" rounded-full h-24 text-[20px] w-24 border flex justify-center items-center">365 DAYS</span>
          </div>
          <button>SHOP NOW</button>
        </div>
      </section>
    </div>
  );
}
