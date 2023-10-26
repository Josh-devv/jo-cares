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
    <div className="bg-red-100" style={{fontFamily: 'ptserifr'}}>
      <Navbar />
      <Homep />

      <div className="h-[50vh] flex justify-center">
        <div className='flex text-center justify-evenly'>
          <div className="w-1/5 flex flex-col justify-center items-center">
            <p><AiOutlineBook className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[30px]'>Book An Appointment</h1>
            <p className="text-slate-500">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
          <div className="w-1/5 flex flex-col justify-center items-center">
            <p><BsHandbag className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[30px]'>Pick Up in A Store</h1>
            <p className="text-slate-500">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
          <div className="w-1/5 flex flex-col justify-center items-center">
            <p><AiOutlineGift className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[30px]'>Special Packaging</h1>
            <p className="text-slate-500">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
          <div className="w-1/5 flex flex-col justify-center items-center">
            <p><HiOutlineRefresh className='text-[30px] text-center text-red-300'/></p>
            <h1 className='text-[30px]'>Free global return</h1>
            <p className="text-slate-500">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
        </div>
      </div>

      <div>
        <div>
          <h1>NEW ARRIVALS</h1>
          <div className="w-11/12 flex">
            <ProdCaro >
               {
                prod.map(product =>(
                  <div className="" key={product.id}>
                    <div  className="">
                    
                    <div>
                      <h1 className="text-[20px]" style={{fontFamily: 'ptserifr'}}>{product.title}</h1>
                      <p>
                        {product.price}</p>
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
