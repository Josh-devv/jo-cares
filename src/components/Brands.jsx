import React from "react";
import Image from "next/image";
import prad from "@/Assets/prads.png"
import ProdCaro from "@/components/ProductCaro";
import { brand, prod } from "./imgCaro";
import BestSellers from "@/components/BestSellers";
import BrandCaro from "@/components/BrandCaro";

export default function Brands() {
    return(
      <div className="flex h-[20vh] pb-5 justify-center items-center w-full flex-col">
      <div className="w-11/12 pt-4 ">
       
          <ProdCaro>
            {prod.map((product) => (
              <BrandCaro product={product} />
            ))}
          </ProdCaro>
        
        </div>
        </div>
    )
}