import React from "react";
import Image from "next/image";
import shhop from "../Assets/shhop.svg";
import { AiOutlineHeart, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import p4 from "@/Assets/post-small-image2.jpg"

export default function NewArrivals({product}){
  const { imageUrl, additionalImageUrls, name, price } = product;
    return (
      <div className="flex justify-evenly font-rbt" key={product.id}>
        
            
            <Image src={product.img} className="rounded-sm w-[240px] bg-cover" alt="" />
          
          
          
      
      </div>
    );
}



      /*
<div className="flex justify-evenly font-rbt" key={product.id}>
        <div className=" h-10/12 w-11/12">
          <div className="relative">
            <div className=" absolute flex justify-end items-end pr-3 pt-3"><AiOutlineHeart size={23} className=""/></div>
            <div className="absolute flex justify-end items-end  pr-3 pt-12"> <Image src={shhop} alt=""/></div>
           
            <Image src={product.img} className="rounded-sm w-[240px] bg-cover" alt="" />
          </div>
          
          <div className="h-[85px] border-2 flex flex-col">
            <h1 className="text-[20px]  max-sm:text-[10px]">
              {product.title}
            </h1>
            <p className="text-[20px] font-normal" style={{color: "#DD8560"}}>{product.price}</p>
            
          </div>
        </div>
      </div>

      */