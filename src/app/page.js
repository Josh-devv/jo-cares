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
      <section className="h-[100vh] bg-black mt-16 flex  items-center">
        <div className="w-[50%] flex justify-start items-start">
          <Image src={sImg}  className="h-[80vh] object-contain" />
        </div>
        <div>
          <h1 className="text-white font-rbt text-[40px] w-4/5">ENJOY OUR ONE OFF DEALS ALL THE WAY</h1>
          <p className="text-gray-500 text-[20px]"> eCommerce Talks discusses tech, current trends, and insights from around the eCommerce world</p>
          
        </div>
      </section>
    </div>
  );
}
