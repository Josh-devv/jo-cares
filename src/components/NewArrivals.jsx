import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BsSuitDiamond } from "react-icons/bs";
import { prod, prod3 } from "@/components/imgCaro";
import ProdCaro from "@/components/ProductCaro";
import BestSellers from "@/components/BestSellers";
import arr from "@/Assets/c3.svg";

export default function NewArrivals() {
  const [selectedComponent, setSelectedComponent] = useState("All");

  const handleItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className=" pt-16">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[30px] max-sm:text-[20px] font-rbt space-x-7 leading-4 h-[32px]">
          NEW ARRIVALS
        </h1>
        <div>
          <Image src={arr} className="w-[200px]" />
        </div>
      </div>

      <div className="font-rbt w-[100%] pt-5">
        <div className="flex text-[25px] max-sm:text-[3.2vw] w-[100%] justify-around">
          <p
            onClick={() => handleItemClick("Dress")}
            className={`cursor-pointer w-1/3 text-center justify-center items-center flex flex-col ${
              selectedComponent === "Dress" ? "text-black" : "text-gray-500"
            }`}
          >
            Dress{" "}
            {selectedComponent === "Dress" ? (
              <BsSuitDiamond size={13} fill="red" />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={() => handleItemClick("Apparel")}
            className={`cursor-pointer w-1/3 items-center text-center justify-center flex flex-col ${
              selectedComponent === "Apparel" ? "text-black" : "text-gray-500"
            }`}
          >
            Apparel{" "}
            {selectedComponent === "Apparel" ? (
              <BsSuitDiamond size={13} fill="red" />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={() => handleItemClick("All")}
            className={`cursor-pointer w-1/3 items-center text-center justify-center flex flex-col ${
              selectedComponent === "All" ? "text-black" : "text-gray-500"
            }`}
          >
            All{" "}
            {selectedComponent === "All" ? (
              <BsSuitDiamond size={13} fill="red" />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={() => handleItemClick("Tshirt")}
            className={`cursor-pointer w-1/3 items-center text-center justify-center flex flex-col ${
              selectedComponent === "Tshirt" ? "text-black" : "text-gray-500"
            }`}
          >
            Tshirt{" "}
            {selectedComponent === "Tshirt" ? (
              <BsSuitDiamond size={13} fill="red" />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={() => handleItemClick("Bag")}
            className={`cursor-pointer w-1/3 items-center text-center justify-center flex flex-col ${
              selectedComponent === "Bag" ? "text-black" : "text-gray-500"
            }`}
          >
            Bag{" "}
            {selectedComponent === "Bag" ? (
              <BsSuitDiamond size={13} fill="red" />
            ) : (
              ""
            )}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full flex-col">
        <div className="w-11/12 pt-4 ">
          {selectedComponent === "All" && (
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
          {selectedComponent === "Apparel" && (
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
          {selectedComponent === "Dress" && (
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
          {selectedComponent === "Tshirt" && (
            <ProdCaro>
              {prod3.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
          {selectedComponent === "Bag" && (
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
        </div>
        <h1 className="py-2 px-4 mt-10 border-2 font-medium font-rbt max-sm:text-[12px]">
          VIEW ALL PRODUCTS
        </h1>
      </div>
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
