import React from "react";
import Image from "next/image";
import p4 from "@/Assets/img-all1.png"

export default function NewArrivals({product}){
  const { imageUrl, additionalImageUrls, name, price } = product;
    return (
      <div className="flex justify-evenly" key={product.id}>
        <div className="w-10/12">
          <Image src={p4} className="w-11/12" />
          <div>
            <h1
              className="text-[20px] max-sm:text-[10px]"
              style={{ fontFamily: "ptserifr" }}
            >
              {name}
            </h1>
            <p className="max-sm:text-[10px]"></p>
          </div>
        </div>
      </div>
    );
}