import React from "react";
import Image from "next/image";
import shhop from "../Assets/shhop.svg";
import { AiOutlineHeart, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { PiUserCircleLight, PiHeartLight } from "react-icons/pi";

export default function NewArrivals({product}){
    return (
      <>
      <div className="flex max-sm:pt-4 justify-evenly font-rbt" key={product.id}>
        <div className=" h-10/12 w-11/12">
          <div className="relative">
            <div className=" absolute flex justify-end items-end pr-3 pt-3 "><PiHeartLight size={23} className=""/></div>
            <div className="absolute flex justify-end items-end  pr-3 pt-12"> <Image src={shhop} alt=""/></div>
           
            <Image src={product.img} className="rounded-md w-[240px] max-sm:w-[170px] bg-cover" alt="" />
          </div>
          
          <div className=" flex flex-col">
            <h1 className="text-[1.4vw] max-lg:text-[1.8vw] max-md:text-[2.2vw] max-sm:text-[3.2vw]">
              {product.title}
            </h1>
            <p className="text-[1.4vw] max-lg:text-[1.8vw] max-md:text-[2.2vw] max-sm:text-[3.2vw]" style={{color: "#DD8560"}}>{product.price}</p>
            
          </div>
        </div>
        
      </div>
      
      </>
      
    );
}