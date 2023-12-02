import React from "react";
import Image from "next/image";
import shhop from "../Assets/shhop.svg";
import { PiUserCircleLight, PiHeartLight } from "react-icons/pi";

export default function NewArrivals({product}){
    return (
      <>
      <div className="flex max-sm:pt-4 justify-evenly font-rbt " key={product.id}>
        <div className=" h-10/12 w-11/12">
          <div className="relative">
            <div className=" absolute flex justify-end items-end pr-3 pt-3 pl-3"><PiHeartLight size={23} className=""/></div>
            <div className="absolute flex justify-end items-end  pr-3 pt-12 pl-3"> <Image src={shhop} alt=""/></div>
            <Image src={product.img} className=" w-[240px] border-black border max-sm:w-[170px] bg-cover" alt="" />
          </div>          
          <div className=" flex flex-col">
            <h1 className="text-[1.4vw] max-lg:text-[1.8vw] max-md:text-[2.2vw] max-sm:text-[3.2vw]">
              {product.title}
            </h1>
            <p className="text-[1.4vw] max-lg:text-[1.8vw] max-md:text-[2.2vw] text-black max-sm:text-[3.2vw]">{product.price}</p>           
          </div>
        </div>
      </div>
      </>
      
    );
}