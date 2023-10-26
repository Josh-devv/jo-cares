'use client'
import Image from "next/image";
import Navbar from '@/components/Navbar'
import Homep from '@/components/Home'
import { AiOutlineBook, AiOutlineGift } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { HiOutlineRefresh } from 'react-icons/hi'
import { prod } from '@/components/imgCaro'
import ProdCaro from "@/components/ProductCaro";



export default function Home() {
  console.log(prod);
  return (
    <div className="bg-red-50" style={{fontFamily: 'ptserifr'}}>
      <Navbar />
      <Homep />

      <div className="flex justify-center ">
        <div className='h-[35vh] max-lg:h-[25vh] max-md:h-[20vh] max-sm:h-[100vh] flex text-center justify-evenly max-sm:flex max-sm:flex-wrap max-sm:py-10'>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full max-sm:py-5">
            <p><AiOutlineBook className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw] '>Book Appointment</h1>
            <p className="text-slate-500 max-md:text-[13px]">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full  max-sm:py-5">
            <p><BsHandbag className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw]'>Pick Up in A Store</h1>
            <p className="text-slate-500 max-md:text-[13px]">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full  max-sm:py-5">
            <p><AiOutlineGift className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw]'>Special Packaging</h1>
            <p className="text-slate-500 max-md:text-[13px]">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full max-sm:py-5">
            <p><HiOutlineRefresh className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[2vw] max-sm:text-[5vw]'>Free global return</h1>
            <p className="text-slate-500 max-md:text-[13px]">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-[30px] max-sm:text-[20px]">NEW ARRIVALS</h1>
          <div className="w-11/12 pt-4">
            <ProdCaro >
               {
                prod.map(product =>(
                  <div className="flex justify-evenly" key={product.id}>
                    <div  className="w-10/12">
                      <Image src={product.img} />
                      <div>
                        <h1 className="text-[20px] max-sm:text-[10px]" style={{fontFamily: 'ptserifr'}}>{product.title}</h1>
                        <p className="max-sm:text-[10px]">{product.price}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </ProdCaro>
           
          </div>
        </div>
      </div>

    </div>
  )
}
