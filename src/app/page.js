'use client'
import Image from "next/image";
import Navbar from '@/components/Navbar'
import Homep from '@/components/Home'
import { AiOutlineBook, AiOutlineGift } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { HiOutlineRefresh } from 'react-icons/hi'
import { prod } from '@/components/imgCaro'
import ProdCaro from "@/components/ProductCaro";
import NewArrivals from "@/components/NewArrivals";
import BestSellers from "@/components/BestSellers";
import cat1 from "@/Assets/cat-large-item1.jpg"
import cat2 from "@/Assets/cat-large-item2.jpg"
import cat3 from "@/Assets/cat-large-item3.jpg"
import col from "@/Assets/collection-banner.jpg"
import arr from "@/Assets/c3.svg"

import Suscribe from "@/components/Suscribe";

import { useEffect, useState } from "react";
import Products from "@/components/Products";


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
      
      <div className=" pt-16">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-[30px] max-sm:text-[20px] font-rbt space-x-7 leading-4 h-[32px]">NEW ARRIVALS</h1>
          <div>
            <Image src={arr}  className="w-[200px]"/>
          </div>
          <div className="font-rbt w-full pt-5">
            <div className="flex text-[25px] max-sm:text-[3.2vw] w-full justify-evenly items-center">
              <p>All</p>
              <p>Apparel</p>
              <p>Dress</p>
              <p>Tshirt</p>
              <p>Bag</p>
            </div>
          </div>

          <div className="w-11/12 pt-4">
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          </div>
          <h1 className="py-2 px-4 mt-10 border-2 font-medium font-rbt max-sm:text-[12px]">VIEW ALL PRODUCTS</h1>

          <h1 className="text-[30px] max-sm:text-[20px] pt-14 max-sm:pt-10 font-rbt">BEST SELLERS</h1>
          <div className="w-11/12 pt-4">
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          </div>
          <h1 className="py-2 px-4 mt-10 border-2 font-medium font-rbt max-sm:text-[12px]">VIEW ALL PRODUCTS</h1>
        </div>
      </div>
    

      <div className="flex flex-col justify-between ">
        <div className="grid grid-cols-2 max-sm:grid-cols-1   text-white pt-10 ">
          <div className="relative ">
            <Image src={cat1} className="w-full max-sm:w-half max-sm:h-full " />
            <div className="absolute top-1/3 w-3/4 max-lg:w-3/4">
              <div className="  z-10 border-4  max-lg:border-2 border-l-0 border-white px-6 py-8">
                <h1 className="text-[3.5vw] w-1/2 max-lg:text-[2.5vw] max-sm:text-[5vw]">
                  {" "}
                  SKIN CARE
                </h1>
                <button className=" bg-red-200 rounded-md bg-opacity-75 text-[1.2vw] p-2 max-md:text-[1.8vw] max-sm:mt-3">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          <div className="h-half">
            <div className="relative">
              <Image src={cat2} className="w-full" />
              <div className="absolute top-0 w-3/4">
                <div className="  z-10 border-4 max-lg:border-2 border-t-0 border-white  px-6 py-8 max-md:py-3 max-sm:py-5">
                  <h1 className="text-[3.5vw] w-1/2 max-lg:text-[2.5vw] max-sm:text-[5vw]">
                    MAKE-UP PRODUCTS
                  </h1>
                  <button className=" bg-red-200 rounded-md bg-opacity-75 bg-none text-[1.2vw] p-2 max-md:text-[1.8vw]">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image src={cat3} className="w-full absolute" />
              <div className="absolute w-3/4">
                <div className="  z-10 border-4  max-lg:border-2 border-t-0 border-white  px-6 py-8 max-md:py-3 max-sm:py-5">
                  <h1 className="text-[3.5vw] w-1/2 max-lg:text-[2.5vw] max-sm:text-[5vw]">
                    BEAUTY PRODUCTS
                  </h1>
                  <button className=" bg-red-200 rounded-md bg-opacity-75 bg-none text-[1.2vw] p-2 max-md:text-[1.8vw]">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="relative hidden max-sm:block max-sm:h-[20vw]"></div>
            </div>
          </div>
        </div>

        <div className="w-full py-8 max-sm:hidden">
          <div className="flex w-full relative justify-center items-center ">
            <div className="w-10/12 flex justify-center items-center">
              <h1 className="absolute text-white text-[5vw] w-40 h-40 self-start justify-self-start" style={{ fontFamily: "itl" }}>
                <span className="line-through">25%</span> NOW 50% OFF
              </h1>
              <Image src={col} className="w-[60%] " />
            </div>

            <div className="w-11/12">
              <h1 className="text-[5vw] max-md:text-[4vw]">
                SUMMER COLLECTION
              </h1>
              <p className="w-[90%] text-slate-400 text-[13px] max-md:text-[10px]">
                Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
                gravida orci, fringilla a. Ac sed eu fringilla odio mi.
                Consequat pharetra at magna imperdiet cursus ac faucibus sit
                libero. Ultricies quam nunc, lorem sit lorem urna, pretium
                aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo
                mollis diam sed facilisis at cursus imperdiet cursus ac faucibus
                sit faucibus sit libero.
              </p>
              <button className="border-2 border-black font-medium mt-4 p-2">
                SHOP COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>

      <Suscribe />
    </div>
  );
}
