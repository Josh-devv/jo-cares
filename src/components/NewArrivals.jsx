import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BsSuitDiamond } from "react-icons/bs";
import { prod, prod3, prod2 } from "@/components/imgCaro";
import { GoNorthStar } from "react-icons/go";
import { ImDiamonds } from "react-icons/im";
import ProdCaro from "@/components/ProductCaro";
import BestSellers from "@/components/BestSellers";


export default function NewArrivals() {
  const [selectedComponent, setSelectedComponent] = useState("MEN");
  const [select2, setSelect2] = useState(false)

  //function to render items by passing the name of the items as components
  const handleItemClick = (component, event) => {
    event.preventDefault()
    setSelectedComponent(component);
    
  };

  const handSelect = ()=>{
    setSelect2(true)
  }
  const hands =()=>{
    setSelect2(false)
  }

  return (
    <div className=" pt-16">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[45px] max-sm:text-[20px] flex items-center font-rbt ">
          <GoNorthStar size={25} /> POPULAR PRODUCTS
          <GoNorthStar size={25} />
        </h1>
        <div className="text-gray-500 text-[20px] text-center w-11/12 max-sm:text-[15px]">
          eCommerce Talks discusses tech, current trends, and insights from
          around the eCommerce world
        </div>
      </div>

      {/**Condition to disply this popup on click of any items name */}    
      {select2 && (
        <div onClick={hands} className="fixed hidden  top-1/2 left-1/2 w-[70vw]
         max-sm:flex max-sm:items-center max-sm:flex-col  transform -translate-x-1/2
          -translate-y-1/2 bg-white p-6 border border-gray-300 shadow-lg
          rounded z-50">
            <p onClick={(event) => handleItemClick("WOMEN", event)}
               className={`cursor-pointer w-1/3 text-center items-center flex flex-col ${
                selectedComponent === "WOMEN" ? "text-black" : "text-gray-500"}`}>
                WOMEN
                {selectedComponent === "WOMEN" ? "" : ""}
            </p>
            <p onClick={(event) => handleItemClick("MEN", event)}
              className={`cursor-pointer py-1 w-1/3 items-center text-center  flex flex-col ${
              selectedComponent === "MEN" ? "text-black" : "text-gray-500"}`}>
              MEN {selectedComponent === "MEN" ? "" : ""}
            </p>

          <p onClick={(event) => handleItemClick("ACCESSORIES", event)}
             className={`cursor-pointer w-1/3 items-center text-center flex flex-col ${
             selectedComponent === "ACCESSORIES"
                ? "text-black"
                : "text-gray-500"}`}>
              ACCESSORIES {selectedComponent === "ACCESSORIES" ? "" : ""}
          </p>
        </div>
      ) }

      <div className="font-rbt1 w-[100%] flex pt-5 max-sm:flex justify-center">
        <div className="flex max-sm:flex-col max-sm:border max-sm:border-x-0
         border-black max-sm:items-center text-[25px] max-lg:text-[20px] 
         max-sm:text-[15px] w-[70%] justify-center">
          <p
            onClick={(event)=> handleItemClick("WOMEN", event)}
            className={`cursor-pointer py-1 w-1/3 items-center  text-center  flex flex-col ${
              selectedComponent === "WOMEN" ? "text-black" : "max-sm:hidden"
            }`}> 
            <div onClick={handSelect}>WOMEN</div>{" "}
            {selectedComponent === "WOMEN" ? <ImDiamonds size={13} /> : ""}
          </p>

          <p
            onClick={(event)=> handleItemClick("MEN", event)}
            className={`cursor-pointer py-1 w-1/3 items-center text-center  flex flex-col ${
              selectedComponent === "MEN" ? "text-black" : "text-gray max-sm:hidden"
            }`}>
             <div onClick={handSelect}>MEN</div> 
              {selectedComponent === "MEN" ? <ImDiamonds size={13} /> : ""}
          </p>

          <p
            onClick={(event)=> handleItemClick("ACCESSORIES", event)}
            className={`cursor-pointer py-1 w-1/3 items-center text-center  flex flex-col ${
              selectedComponent === "ACCESSORIES" ? "text-black" : "max-sm:hidden text-gray"
            }`}> 
            <div onClick={handSelect}>ACCESSORIES</div> 
             {selectedComponent === "ACCESSORIES" ? <ImDiamonds size={13} /> : ""}
          </p>
           
        </div>
      </div>

      {/**Rendering of items in these components */}     
      <div className="flex justify-center items-center w-full flex-col">
        <div className="w-11/12 pt-4 ">
          {selectedComponent === "ACCESSORIES" && (
            <ProdCaro>
              {prod2.map((product) => (
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
              {prod3.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          )}
        </div>
        <h1 className="py-2 px-4 mt-10 border border-black font-medium font-rbt max-sm:text-[12px]">
          VIEW ALL PRODUCTS
        </h1>
      </div>
    </div>
  );
}
