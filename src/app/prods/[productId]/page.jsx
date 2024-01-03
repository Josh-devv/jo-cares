'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Suscribe from '@/components/Suscribe';
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci"
import { prod,prod2, prod3 } from '@/components/imgCaro'
import { FaFacebook, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";
import p2 from "@/Assets/p-038.jpg"
import p3 from "@/Assets/star5.png"
import p4 from "@/Assets/p-019.jpg"
import m3 from "@/Assets/m3.jpg"


export default function Prods({params}) {
  const { productId } = params;

  // Find the selected product based on productId in the desired array
  //by using the productId to access the parameters in each product
  const findProductById = (productId, dataArray) => {
    return dataArray.find(product => product.id === Number(productId));
  };

    // Check in different arrays until the product is found
  const selectedProduct = findProductById(productId, prod) || findProductById(productId, prod2) || findProductById(productId, prod3);

  const { title, price, img } = selectedProduct;

  const [mainImage, setMainImage] = useState(img); // Initial main image

  const handleImageClick = (newImage)=>{
    setMainImage(newImage)
  }
  return (
    <div>
      <Navbar />
      <div className='h-[20vh] max-sm:h-[12vh]'>

      </div>
      <div className='h-screen  max-md:h-[100%] w-[100%] flex 
          max-md:flex-col justify-evenly items-center' >
            <div className='w-[40%] max-md:w-[100%] max-md:justify-center max-md:h-[100%] h-[100%]'>
                 <div className=' flex max-md:w-[100%]  justify-center items-center  ' data-aos="fade-up" data-aos-duration="500">
                      <Image src={mainImage} className=' bg-cover obj max-md:w-[95%] max-sm:h-[45vh] h-[80vh]' data-aos="fade-up" data-aos-duration="700" />
                 </div> 
                 <div className='w-[100%] flex justify-center'>
                    <div className="flex justify-start max-md:w-[95%] py-4 space-x-4">
                    {/* Thumbnails or smaller images */}
                      <Image
                        src={img}
                        alt="Thumbnail 2"
                        className="w-28 max-sm:w-20 max-sm:h-20 h-28 object-cover cursor-pointer"
                        onClick={() => handleImageClick(img)}/>
                      <Image
                        src={p2}
                        alt="Thumbnail 3"
                        className="w-28 h-28 max-sm:w-20 max-sm:h-20 object-cover cursor-pointer"
                        onClick={() => handleImageClick(p2)}/>
                      <Image
                        src={p4}
                        alt="Thumbnail 4"
                        className="w-28 h-28 max-sm:w-20 max-sm:h-20 object-cover cursor-pointer"
                        onClick={() => handleImageClick(p4)}/>
                      <Image
                        src={m3}
                        alt="Thumbnail 4"
                        className="w-28 h-28 max-sm:w-20 max-sm:h-20 object-cover cursor-pointer"
                        onClick={() => handleImageClick(m3)}/>
                    </div>
                 </div>
            </div>
              
            <div className='w-[40%] h-[100%] max-md:w-[95%] flex justify-start  flex-col'>
              <h1 className='text-[45px]  max-sm:text-[25px] font-rbt3'>{title}</h1>
                <p className='flex'>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <i className='font-rbt4'> 3 Reviews</i>
                </p>
                <h1 className='text-[50px] max-sm:text-[25px] font-rbt3'>{price}</h1>
                <p className='font-rbt1 py-5 mt-10 border-t border-x-0 border-b-0 border'>
                  Product categories and tags work in much the same way
                  as normal categories and tags you have when writing
                  posts in WordPress. They can be created, edited, and
                  selected at any time.
                </p>
  
                <div>
                  <p>Size: M</p>
                  <div className='flex'>
                    <p className='py-1 px-2 text-[13px] bg-gray-200'>L</p>
                    <p className='py-1 px-2 text-[13px] bg-gray-200'>M</p>
                    <p className='py-1 px-2 text-[13px] bg-gray-200'>X</p>
                    <p className='py-1 px-2 text-[13px] bg-gray-200'>XL</p>
                  </div>
                </div>

                <div className='flex py-7 items-center'>
                  <div className='p-2 w-[100px] flex justify-between border-black border'>
                    <span className='text-[20px]'>-</span>
                    <span className='text-[20px]'>1</span>
                    <span className='text-[20px]'>+</span>
                  </div>
                  <button className='font-rbt1 bg-black p-3 text-white ml-3'> ADD TO CART</button>
                </div>
                <p className='font-rbt1 text-[13px] flex'><CiHeart />Add To Wishlist</p>
  
                <div className='flex w-[full] justify-between py-5 font-rbt1 border border-b border-x-0 border-t-0'>
                  <p>DESCRIPTION</p>
                  <p>REVIEWS(3)</p>
                </div>
                <div className='py-5 font-rbt1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </div>
  
                <div className='font-rbt2'>
                  Share 
                <div>
                <div className="flex w-[20%] justify-evenly">
                  <FaFacebook size={20}/> 
                  <FaTwitter size={20}/> 
                  <FaYoutube size={20}/> 
                  <FaBehance size={20}/>                   
                </div>
              </div>
            </div>
          </div>      
      </div>
      <div className='pt-20'>
        <Suscribe  />
      </div>
        </div>
  )
}


