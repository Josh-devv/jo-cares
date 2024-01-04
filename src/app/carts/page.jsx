'use client'
import React from "react";
import Image from "next/image";
import { PiUserCircleLight, PiHeartLight } from "react-icons/pi";
import { useCart } from "../context";

export default function Carts(){
    const { cartItems, handleAddToCart } = useCart()

    return(
        <>
        <div className="flex justify-center items-center w-full flex-col">
        <div className="w-11/12 pt-4 ">
{
    cartItems.map((product)=>(
        <div className="flex max-sm:pt-4 justify-evenly font-rbt1 " data-aos="fade-up" data-aos-duration="500" key={product.id}>        
        <div className=" h-10/12 w-11/12">
          <div className="relative">
            <div className="absolute flex h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className=" absolute flex justify-end items-end pr-3 text-white z-50  pt-3 pl-3"><PiHeartLight size={23} className=""/></div>              
              <div className=" h-[100%] flex justify-center items-center text-white font-rbt   bg-gradient-to-t from-transparent via-black/50 to-black absolute w-full ">
                <button className="border border-white p-3">
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="w-full ">
              <Image src={product.img} className="opacity-100 w-full border-black border max-sm:w-[170px] bg-cover" alt="" />
            </div> 
          </div>     

          <div className=" flex flex-col font-rbt4">
            <h1 className="text-[1.3vw] max-lg:text-[1.8vw] font-[500px]  max-md:text-[2vw] max-sm:text-[12px]">
              {product.title}
            </h1>
            <p className="text-[1.4vw] font-medium max-lg:text-[1.8vw] max-md:text-[2.2vw] text-black max-sm:text-[3.2vw]">{product.price}</p>             
          </div>
        </div>
      </div>
    ))
}
</div>
</div>
        </>
    )
}