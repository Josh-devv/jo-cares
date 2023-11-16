'use client'
import React from "react";
import Image from "next/image";
import Navbar from '@/components/Navbar'
import Homep from '@/components/Home'
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
    </div>
  );
}
