import React from "react";
import Image from "next/image";
import prad from "@/Assets/prads.png"
export default function Brands() {
    return(
        <div className="flex flex-wrap justify-evenly">
          <Image src={prad} className="w-[150px]" />  
          <Image src={prad} className="w-[150px]" />  
          <Image src={prad} className="w-[150px]" />  
          <Image src={prad} className="w-[150px]" />  
          <Image src={prad} className="w-[150px]" />  
          
        </div>
    )
}