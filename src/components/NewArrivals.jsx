import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BsSuitDiamond } from "react-icons/bs";
import { prod, prod3 } from "@/components/imgCaro";
import { GoNorthStar } from "react-icons/go";
import { ImDiamonds } from "react-icons/im";
import ProdCaro from "@/components/ProductCaro";
import BestSellers from "@/components/BestSellers";
import arr from "@/Assets/c3.svg";

export default function NewArrivals() {
  const [selectedComponent, setSelectedComponent] = useState("ACCESSORIES");

  const handleItemClick = (component, event) => {
    event.preventDefault()
    setSelectedComponent(component);
  };

  return (
    <div className=" pt-20">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[45px] max-sm:text-[20px] flex items-center font-rbt ">
        <GoNorthStar size={25} /> POPULAR PRODUCTS<GoNorthStar size={25} />
        </h1>
        <div className="text-gray-500 text-[20px]">
          eCommerce Talks discusses tech, current trends, and insights from around the eCommerce world
        </div>
      </div>

      <div className="font-rbt w-[100%] pt-5">
        <div className="flex text-[25px] max-sm:text-[20px] w-[100%] justify-around">
          <p
            onClick={(event) => handleItemClick("WOMEN", event)}
            className={`cursor-pointer w-1/3 text-center items-center flex flex-col ${
              selectedComponent === "WOMEN" ? "text-black" : "text-gray-500"
            }`}
          >
            WOMEN{" "}
            {selectedComponent === "WOMEN" ? (
              <ImDiamonds size={13} />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={(event) => handleItemClick("MEN", event)}
            className={`cursor-pointer w-1/3 items-center text-center  flex flex-col ${
              selectedComponent === "MEN" ? "text-black" : "text-gray-500"
            }`}
          >
            MEN{" "}
            {selectedComponent === "MEN" ? (
              <ImDiamonds size={13} />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={(event) => handleItemClick("ACCESSORIES", event)}
            className={`cursor-pointer w-1/3 items-center text-center flex flex-col ${
              selectedComponent === "ACCESSORIES" ? "text-black" : "text-gray-500"
            }`}
          >
            ACCESSORIES{" "}
            {selectedComponent === "ACCESSORIES" ? (
              <ImDiamonds size={13} />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={(event) => handleItemClick("Tshirt", event)}
            className={`cursor-pointer w-1/3 items-center text-center  flex flex-col ${
              selectedComponent === "Tshirt" ? "text-black" : "text-gray-500"
            }`}
          >
            Tshirt{" "}
            {selectedComponent === "Tshirt" ? (
              <ImDiamonds size={13} />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={(event) => handleItemClick("Bag", event)}
            className={`cursor-pointer w-1/3 items-center text-center flex flex-col ${
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
          {selectedComponent === "ACCESSORIES" && (
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
          {selectedComponent === "MEN" && (
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
          {selectedComponent === "WOMEN" && (
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
