'use client'
import React from "react";
import Image from "next/image";
import AOSWrapper from "./AOSWarapper";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { PiUserCircleLight, PiHeartLight } from "react-icons/pi";


export default function NewArrivals({product}){
    return (
      <>
       
       
       <div
        className="flex flex-col justify-center font-rbt1 p-4  rounded-md"
        data-aos="fade-up"
        data-aos-duration="200"
        key={product.id}
      >
        
        <div className=" h-10/12 w-[100%] border pb-3 border-black">
          <div className="relative">
            <div className="absolute flex h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className=" absolute flex justify-end items-end pr-3 text-white z-50  pt-3 pl-3"><PiHeartLight size={23} className=""/></div>              
              <div className=" h-[100%] flex justify-center items-center text-white font-rbt   bg-gradient-to-t from-transparent via-black/50 to-black absolute w-full ">
              <Link href="/prods/[productId]" as={`/prods/${product.id}`}>
                <button className="border border-white font-rbt5 p-3">
                  BUY NOW
                </button>
              </Link>
              </div>
            </div>
            <div className="w-full ">
              <Image src={product.img} className="opacity-100 w-full border-black border-b  bg-cover" alt="" />
            </div> 
          </div>     
          <Link href="/prods/[productId]" as={`/prods/${product.id}`}>
            <div className=" flex flex-col w-[100%] font-rbt5 pl-3 pt-3">
              <h1 className="text-[1.3vw] max-lg:text-[1.8vw]    max-md:text-[2.2vw] max-sm:text-[20px]">
                {product.title}
              </h1>
              <p className="text-[1.4vw]  max-lg:text-[1.8vw] max-md:text-[2.2vw] text-black max-sm:text-[20px]">${product.price}</p> 
              <p className='flex w-[100%]'>
                    <IoStarSharp color='black'/>
                    <IoStarSharp color='black'/>
                    <IoStarSharp color='black'/>
                    <IoStarSharp color='black'/>
                    <IoStarSharp color='black'/>
              </p> 

            </div>
          </Link>
        </div>
      </div>
      
      </>
      
    );
}