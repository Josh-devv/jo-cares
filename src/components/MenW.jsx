import React from "react";
import Image from "next/image";
import mw from "@/Assets/menW.jpg"
import AOSWarapper from "@/components/AOSWarapper";


export default function MenW() {
    return(
        <div className="w-[100%] h-[100%] relative py-10 flex max-sm:flex-col items-center">
            <AOSWarapper/>
            <div className="w-[60%] max-sm:w-[100%] "><Image src={mw}  data-aos="fade-up" data-aos-duration="800" alt="" className="w-[100%] max-sm:h-[40vh]" /></div>
            <div className="flex items-center max-sm:absolute  max-sm:top-[30%] max-sm:text-white max-sm:justify-center max-sm:flex-col max-sm:w-[100%]">
               <div className="flex max-sm:justify-between font-rbt2 max-sm:w-[50%]  flex-col max-sm:flex-row">
                    <p className="transform rotate-90 transition-all cursor-pointer duration-400 border-b-black max-sm:border-b-white border-b max-sm:rotate-0  max-md:px-3 origin-center max-md:text-[20px] max-lg:text-[30px] text-[45px]">MEN</p>
                    <p className="transform rotate-90  max-sm:rotate-0 transition-all cursor-pointer duration-400 pl-14 max-sm:p-0 max-md:px-6 max-md:py-5 origin-center max-md:text-[20px] max-lg:text-[30px] text-[45px]">WOMEN</p>
                </div> 
                <div>
                   <p className="rounded-full hover:bg-black hover:text-white transition-opacity duration-500 font-rbt2 max-sm:mt-4 max-sm:rounded-sm max-sm:h-16 max-sm:w-32 flex justify-center items-center w-32 h-32 border max-sm:border-white border-black">COLLECTION</p> 
                </div>    
                
           





            </div>
        </div>
    )
}