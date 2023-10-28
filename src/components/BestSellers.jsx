import React from "react";
import Image from "next/image";

export default function NewArrivals({product}){
    return (
      <div className="flex justify-evenly" key={product.id}>
        <div className="w-10/12">
          <Image src={product.img} className="rounded-md" />
          <div>
            <h1
              className="text-[20px] max-sm:text-[10px]"
              style={{ fontFamily: "ptserifr" }}
            >
              {product.title}
            </h1>
            <p className="max-sm:text-[10px]">{product.price}</p>
          </div>
        </div>
      </div>
    );
}