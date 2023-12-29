import React from "react";
import Image from "next/image";
import prad from "@/Assets/prads.png"

export default function BrandCaro(){
    return(
        <div className="flex justify-evenly">
            <Image src={prad} className="w-[150px]"/>
        </div>
    )
}