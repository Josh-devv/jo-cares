'use client'
import React from "react";
import Image from "next/image";
import { useCart } from "../context";

export default function Carts(){
    const { cartItems, inc } = useCart()


    return(
        <>
        
{
    cartItems.map((product)=>(
        <div className="flex max-sm:pt-4 border-b pb-2 w-[100%] justify-evenly pt-4 font-rbt1 "  key={product.id}>        
        <div className="flex w-[100%]">
         
            
              <Image src={product.img} className="opacity-100 w-[16%] max-sm:w-[25%] bg-cover" alt="" />
                

          <div className=" flex flex-col font-rbt4 pl-3">
            <h1 className="text-[1.1vw] max-lg:text-[1.8vw] font-[500px] max-md:text-[2vw] max-sm:text-[12px]">
              {product.title}
            </h1>
            <p className="text-[1.4vw] font-medium max-lg:text-[1.8vw] max-md:text-[2.2vw] text-black max-sm:text-[3.2vw]">{inc}{product.price}</p>             
          </div>
        </div>
      </div>
    ))
}

        </>
    )
}