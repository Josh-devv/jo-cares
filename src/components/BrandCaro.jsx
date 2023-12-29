import React from "react";
import Image from "next/image";
import prad from "@/Assets/prads.png"

export default function BrandCaro({product}){
    return(
        <div className="flex justify-evenly">
            <Image src={product.image} className="w-[150px]"/>
        </div>
    )
}