'use client'
import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react'
import Image from 'next/image'
import { GoNorthStar } from "react-icons/go";
import { FaFacebook, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";
import p2 from "@/Assets/p-038.jpg"
import Navbar from '@/components/Navbar'
import p3 from "@/Assets/p-020.jpg"
import p4 from "@/Assets/p-019.jpg"
import m3 from "@/Assets/m3.jpg"

import Suscribe from '@/components/Suscribe';
import ProductDetails from './ProductDetails';

export default function News(){
  
  

  
    const handleImageClick = (newImage) => {
      setMainImage(newImage);
    };

    return(
        <div>
        <Navbar />
        <ProductDetails />
        <div className='pt-20'>
          <Suscribe  />
        </div>
        
        </div>
        
    )
}