'use client'
import Image from "next/image";
import Navbar from '@/components/Navbar'
import Homep from '@/components/Home'
import { AiOutlineBook, AiOutlineGift } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { HiOutlineRefresh } from 'react-icons/hi'
import { prod } from '@/components/imgCaro'
import ProdCaro from "@/components/ProductCaro";
import NewArrivals from "@/components/NewArrivals";
import BestSellers from "@/components/BestSellers";
import cat1 from "@/Assets/cat-large-item1.jpg"
import cat2 from "@/Assets/cat-large-item2.jpg"
import cat3 from "@/Assets/cat-large-item3.jpg"



export default function Home() {
  console.log(prod);
  return (
    <div className="bg-red-10" style={{fontFamily: 'ptserifr'}}>
      <Navbar />
      <Homep />

    <div className="flex justify-center ">
        <div className='h-[40vh] max-lg:h-[30vh] max-md:h-[40vh] max-sm:h-[50vh] flex text-center justify-evenly max-sm:grid max-sm:grid-cols-2 max-sm:py-10'>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full max-sm:py-">
            <p><AiOutlineBook className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw] '>Book Appointment</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:pb-7 max-sm:w-11/12">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full  max-sm:py-">
            <p><BsHandbag className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw]'>Pick Up in A Store</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:pb-7  max-sm:w-11/12">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full  max-sm:py-">
            <p><AiOutlineGift className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw]'>Special Packaging</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:w-11/12">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full max-sm:py-">
            <p><HiOutlineRefresh className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw]'>Free global return</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:w-11/12 ">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
        </div>
    </div>

    <div className="">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-[30px] max-sm:text-[20px]" style={{fontFamily: "itl"}}>NEW ARRIVALS</h1>
          <div className="w-11/12 pt-4">

            <ProdCaro >
               {
                prod.map(product =>(
                  <NewArrivals product={product} />
              ))}
            </ProdCaro>
           
          </div>
          <h1 className="py-5 font-medium">VIEW ALL PRODUCTS</h1>

          <h1 className="text-[30px] max-sm:text-[20px] pt-14" style={{fontFamily: "itl"}}>BEST SELLERS</h1>
          <div className="w-11/12 pt-4">

            <ProdCaro >
               {
                prod.map(product =>(
                  <BestSellers product={product} />
              ))}
            </ProdCaro>
           
          </div>
          <h1 className="py-5 font-medium">VIEW ALL PRODUCTS</h1>
        </div>
    </div>

    <div className=" text-white">

      <div className="grid grid-cols-2 ">
        <div className="">
          <Image src={cat1} className="w-1/2 absolute"/>
          <div className="flex justify-center items-center">
             <div className="flex top z-10 absolute border border-white-500">
              <h1>SKIN CARE</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
           
          
        </div>

        <div className="">
          <div>
            <Image src={cat2} />
            <div></div>
          </div>
          <div>
            <Image src={cat3} />
            <div></div>
          </div>
        </div>
      </div>

    </div>
        
    </div>
  )
}
