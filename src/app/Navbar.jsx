'use client'
import React, { useRef } from "react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import logo from "../Assets/Logo.svg";
import shhop from "../Assets/shhop.svg";
import Search from "../Assets/Search.svg";
import men from "../Assets/Menu.svg";
import { AiOutlineHeart, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiUserCircleLight, PiHeartLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { CartContext, useCart } from "@/app/context";
import Carts from "@/app/carts/page";
import SignUpForm from "./register/page";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [login, setLogin] = useState(false);

  const contentRef = useRef(null);
  const {add, handleRemoveFromCart, totalPrice, logs} = useContext(CartContext)
  

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleCart = () => {
    setCart(!cart);   
  };
  const handleLogin = () => {
    setLogin(!login);   
  };

  const handleScroll = () => {
    if (contentRef.current) {
        const { scrollTop } = contentRef.current;

        if (scrollTop === 0) {
            document.querySelector('.types').classList.remove('overflow-hidden');
            document.querySelector('.types').classList.add('overflow-auto');
        } else {
            document.querySelector('.types').classList.remove('overflow-auto');
            document.querySelector('.types').classList.add('overflow-hidden');
        }
    }
};

  const handleRemove=()=>{
    handleRemoveFromCart
  }
  useEffect(() => {{
    window.onresize = () => {
        if (window.innerWidth >= 1024) {
            setMenu(false)
        }
    }
  }})

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  return (
    <>
    
      <section style={{ top: visible ? '0' : '-100px', transition: 'top 0.3s' }}
      className="h-[14vh] max-sm:h-[10vh] bg-transparent fixed w-screen z-50 bg-white text-black  px-10  border-b border-b-black flex items-center justify-center max-sm:px-5">
         
        <div className="mr-auto flex">
        <div className="hidden max-lg:block ml-auto pr-4 cursor-pointer">
          <Image src={men} alt=""  onClick={handleClick}/>
        </div>
          <Image src={logo} alt="" width={120} height={120} />
        </div>
        <ul className="flex font-rbt justify-evenly  gap-12 text-lg text-bold gap-md-5 max-lg:hidden">
          <Link href="/">
            <li className="flex items-center"> 
              HOME
              
            </li>
          </Link>
          <Link href="/shop">
            <li className="flex items-center">
              SHOP
              
            </li>
          </Link>
          <li className="flex cursor-pointer" onClick={handleLogin}>MY ACCOUNT</li>
        </ul>
        <div className="hidden max-lg:hidden ml-auto cursor-pointer">
        <Image src={men} alt=""  onClick={handleClick}/>
        </div>
        <div className="hidden max-lg:flex ml-auto  cursor-pointer">
        <Image src={shhop} alt="" onClick={handleCart}/>({add})
        </div>

        <ul className="flex ml-auto justify-between items-center font-sans gap-10 max-md:hidden max-lg:ml-0 pl-5">
          
          <li className="flex text-lg max-md:block">
            
            <Image src={shhop} alt="" onClick={handleCart}/>
            
          
            ({add})
          </li>
          <li className="flex text">
            <Image src={Search} alt=""  />
          </li>
          <li className="flex text-lg">
            <PiUserCircleLight size={30} onClick={handleLogin}/>
          </li>
         
        </ul>

        <div className={menu ? `types h-screen fixed  right-0 top-0 z-10` : ''}>
          <ul className=" top-0 type bg-white h-screen absolute font-rbt4 font-semibold shadow-lg right-[-100%] w-10/12 pt-7 pl-20 flex-column max-sm:w-screen max-sm:pl-10">
            <ul className="flex justify-between pt-0 border-b">
            <li className="pr-10 cursor-pointer">
                <AiOutlineClose size={25} onClick={handleClick} />
              </li>
              <div className="flex pr-4 pb-3"><Image src={shhop} alt="" onClick={handleCart}/>
            
          
            ({add})</div>
             
            </ul>
            <li className="flex items-center text-lg py-3 pt-10">
              <Link href="/" style={{textDecoration: 'none', color: 'inherit'}}>
              HOME
              </Link>
              
              
            </li>
            <li className="flex text-lg items-center  py-3 ">
            <Link href="/shop">
              SHOP NOW
              </Link>
            </li>
            <li className="flex text-lg cursor-pointer  py-3" onClick={handleLogin}>
           
              LOGIN/REGISTER
              
            </li>
            
          </ul>
        </div>

        <div ref={contentRef} onScroll={handleScroll} className={cart ? `types  absolute right-0 top-0 z-50` : ''}>
          <div className="h-[100vh] w-[100%]">
          <ul    className="bg-white top-0  absolute h-screen shadow-lg right-[-100%] flex flex-col w-[40%] max-md:w-[70%] pt-7 pl-10 flex-column max-sm:w-screen max-sm:pl-5">
          <ul className="flex justify-between pt-0  border-b">
              <li className="text-2xl pb-4 font-rbt">SHOPPING CART  <span className="bg-black p-1 px-3 text-white rounded-full"> {add}</span></li>
              <li className="pr-8 cursor-pointer">
                <AiOutlineClose size={25} onClick={handleCart} />
              </li>
            </ul>
            <div className="pt-6 h-[100vh] overflow-y-auto">
              <div className="">
                <Carts />
              </div>
              
            </div>
            <div className="h-[30vh] mb-12 flex flex-col justify-end items-start">
              <div className="text-blue flex w-[100%] mb-5 border-b text-[20px] justify-between font-rbt text-gray-600 font-semibold"><span className="">SUBTOTAL:</span> <span className="pr-8 ">${totalPrice}</span> </div>
              <div className="flex justify-between mb-3 w-[100%] ">
                <button className="border-black  px-12 py-3 max-sm:text-[15px] max-sm:px-6 border font-rbt font-semibold">VIEW CART</button>
                <Link href="/checkout/checkout">
                  <button  className="border-black px-12 py-3 max-sm:text-[15px] max-sm:px-6 text-white bg-black  font-rbt font-semibold border mr-5 ">CHECKOUT</button>
                </Link>
                
              </div>
            </div>
          </ul>
          </div>
        </div>
      
        <div ref={contentRef} onScroll={handleScroll} className={login ? `types  absolute right-0 top-0 z-50` : ''}>
          <div className="h-[100vh] w-[100%]">
          <ul    className="bg-white top-0  absolute h-screen shadow-lg right-[-100%] flex flex-col w-[40%] max-md:w-[70%] pt-7  flex-column max-sm:w-screen max-sm:pl-5">
          <ul className="flex justify-between pt-0  border-b"> 
            <li className="text-2xl pb-4  pl-8 font-rbt">LOGIN</li>
              <li className="pr-8 cursor-pointer">
                <AiOutlineClose size={25} onClick={handleLogin} />
              </li>
            </ul>
            <div className=" h-[100vh] overflow-y-auto">
              <div className="">
                <SignUpForm />
              </div>
              
            </div>
            
          </ul>
         
          </div>
        </div>
      
      </section>
      
    </>
  );
}

export default Navbar;