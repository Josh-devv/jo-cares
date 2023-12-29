import React from "react";
import Image from "next/image";
import mw from "@/Assets/menW.jpg"
import prada from "@/Assets/prada.png"

export default function MenW() {
    return(
        <div className="w-[100%] h-[100%] relative py-10 flex max-md:flex-col items-center">
            <div className="w-[60%] max-md:w-[100%] "><Image src={mw} alt="" className="w-[100%]" /></div>
            <div className="flex items-center max-md:absolute max-md:top-1/4 max-sm:top-[20%] max-md:text-white max-md:justify-center max-md:flex-col max-md:w-[100%]">
               <div className="flex max-md:justify-center max-md:w-[100%]  flex-col max-md:flex-row">
                    <p className="transform rotate-90 max-md:rotate-0 py-5 max-md:px-6 origin-center max-md:text-[30px] max-lg:text-[50px] text-[60px]">MEN</p>
                    <p className="transform rotate-90 max-md:rotate-0 py-14 max-md:px-6 max-md:py-5 origin-center max-md:text-[30px] max-lg:text-[50px] text-[60px]">WOMEN</p>
                </div> 
                <div>
                   <p className="rounded-full flex justify-center items-center w-32 h-32 border max-md:border-white border-black">COLLECTION</p> 
                </div>    
            </div>
        </div>
    )
}