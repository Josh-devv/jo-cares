'use client'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useCart } from '@/components/CartsProvider'
import Image from 'next/image'
import Navbar from '@/app/Navbar'
import Suscribe from '@/app/Suscribe';
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci"
import { prod,prod2, prod3 } from '@/app/imgCaro'
import { FaFacebook, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";
import p2 from "@/Assets/p-038.jpg"
import p3 from "@/Assets/star5.png"
import p4 from "@/Assets/p-019.jpg"
import m3 from "@/Assets/m3.jpg"
import { CartContext } from '@/app/context'


export default function Prods({params}) {
  const { productId } = params
  const { cartItems, handleAddToCart, inc, setInc } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const handleImageClick2 = () => {
    setZoomed(!zoomed);
  };


  const togglePopup = () => {
    setShowPopup(!showPopup);
    // You can also perform other actions or logic here when the popup is toggled
  };
  //const { addToCart } = useCart();
  


  // Find the selected product based on productId in the desired array
  //by using the productId to access the parameters in each product
  const findProductById = (productId, dataArray) => {
    return dataArray.find(product => product.id === Number(productId));
  };

    // Check in different arrays until the product is found
  const selectedProduct = findProductById(productId, prod) || findProductById(productId, prod2) || findProductById(productId, prod3);
  
  const { title, price, img } = selectedProduct;

  const itemTo = selectedProduct
  
  const AddToCart=()=>{
    handleAddToCart(itemTo)
    setShowPopup(!showPopup);

  }

  const [mainImage, setMainImage] = useState(img); // Initial main image
  //const [inc, setInc] =useState(1)

  const handleIncrease=()=>{
    setInc(inc + 1)
  }
  const handleDecrease=()=>{
    setInc(inc - 1)
  }
  const handleImageClick = (newImage)=>{
    setMainImage(newImage)
  }

  
  return (
    <div>
      <Navbar />
     
      <div className='h-[17vh] max-md:h-[13vh] max-sm:h-[12vh]'>
          
          
      </div>
      {
              showPopup ? (
                <div className='fixed z-10  w-[100%] left-1/2 text-white flex justify-center items-end font-rbt transform -translate-x-1/2 -translate-y-1/2 bg-green-400 p-2 rounded shadow-md'>
                <p>Item has already been to the Cart!!!</p>
              </div>
           
              ) : (
                ""
              )
            }
      <div className='h-[100%] pt-6  max-md:h-[100%] w-[100%] flex 
          max-md:flex-col justify-evenly items-start max-md:items-center' >
              
          
       
            <div className='w-[40%] max-lg:w-[50%] max-md:w-[100%] max-md:justify-center max-md:h-[100%] h-[100%]'>
          
                 <div className=' flex max-md:w-[100%]  justify-center items-center  ' data-aos="fade-up" data-aos-duration="500">
                      <Image src={mainImage} className='obj max-md:w-[90%] max-lg:h-[70vh] max-sm:h-[70vh] h-[100vh]' data-aos="fade-up" data-aos-duration="700" />
                 </div> 
                 <div className='w-[100%] flex justify-center'>
                    <div className="flex justify-start max-md:w-[90%] py-2 space-x-2">
                    {/* Thumbnails or smaller images */}
                      <Image
                        src={img}
                        alt="Thumbnail 2"
                        className="w-32 max-lg:w-28 max-lg:h-28 max-sm:w-20 max-sm:h-20 h-32 bg-cover cursor-pointer"
                        onClick={() => handleImageClick(img)}/>
                      <Image
                        src={p2}
                        alt="Thumbnail 3"
                        className="w-32 h-32 max-lg:w-28 max-lg:h-28 max-sm:w-20 max-sm:h-20 bg-cover cursor-pointer"
                        onClick={() => handleImageClick(p2)}/>
                      <Image
                        src={p4}
                        alt="Thumbnail 4"
                        className="w-32 h-32 max-lg:w-28 max-lg:h-28 max-sm:w-20 max-sm:h-20 bg-cover cursor-pointer"
                        onClick={() => handleImageClick(p4)}/>
                      <Image
                        src={m3}
                        alt="Thumbnail 4"
                        className="w-32 h-32 max-lg:w-28 max-lg:h-28 max-sm:w-20 max-sm:h-20 bg-cover cursor-pointer"
                        onClick={() => handleImageClick(m3)}/>
                    </div>
                 </div>
            </div>
              
            <div className='w-[40%] h-[100%] justify-center max-md:w-[90%] flex  flex-col'>
              <h1 className='text-[48px] max-lg:text-[40px]  max-sm:text-[25px] font-rbt3'>{title}</h1>
                <p className='flex'>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <IoStarSharp color='yellow'/>
                  <i className='font-rbt4'> 3 Reviews</i>
                </p>
                <h1 className='text-[50px] max-lg:text-[40px] max-sm:text-[35px] font-rbt3'>${price}</h1>
                <p className='font-rbt5 py-5 mt-10 border-t border-x-0 border-b-0 border'>
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
                    <span className='text-[20px] cursor-pointer' onClick={handleDecrease}>-</span>
                    <span className='text-[20px]'>{inc}</span>
                    <span className='text-[20px] cursor-pointer' onClick={handleIncrease}>+</span>
                  </div>
                  <button className='font-rbt5 bg-black p-3 text-white ml-3' onClick={AddToCart}> ADD TO CART</button>
                </div>
                <p className='font-rbt1 text-[13px] flex'><CiHeart />Add To Wishlist</p>
  
                <div className='flex w-[full] justify-between py-5 font-rbt1 border border-b border-x-0 border-t-0'>
                  <p>DESCRIPTION</p>
                  <p>REVIEWS(3)</p>
                </div>
                <div className='py-5 font-rbt5 '>
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


