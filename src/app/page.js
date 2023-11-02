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
import col from "@/Assets/collection-banner.jpg"
import Suscribe from "@/components/Suscribe";



export default function Home() {
  console.log(prod);
  return (
    <div
      className=" text-black bg-red-50"
      style={{ fontFamily: "ptserifr", backgroundColor: "" }}
    >
      <Navbar />
      <Homep />

      <div className="flex justify-center ">
        <div className="h-[40vh] max-lg:h-[30vh] max-md:h-[40vh] max-sm:h-[50vh] flex text-center justify-evenly max-sm:grid max-sm:grid-cols-2 max-sm:py-10">
          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full max-sm:py-">
            <p>
              <AiOutlineBook className="text-[30px] text-center text-red-300" />
            </p>
            <h1 className="text-[2vw] max-sm:text-[5vw] ">Book Appointment</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:pb-7 max-sm:w-11/12">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>

          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full  max-sm:py-">
            <p>
              <BsHandbag className="text-[30px] text-center text-red-300" />
            </p>
            <h1 className="text-[2vw] max-sm:text-[5vw]">Pick Up in A Store</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:pb-7  max-sm:w-11/12">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>

          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full  max-sm:py-">
            <p>
              <AiOutlineGift className="text-[30px] text-center text-red-300" />
            </p>
            <h1 className="text-[2vw] max-sm:text-[5vw]">Special Packaging</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:w-11/12">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>

          <div className="w-1/5 flex flex-col justify-center items-center max-sm:w-full max-sm:py-">
            <p>
              <HiOutlineRefresh className="text-[30px] text-center text-red-300" />
            </p>
            <h1 className="text-[2vw] max-sm:text-[5vw]">Free global return</h1>
            <p className="text-slate-500 max-md:text-[13px] max-sm:w-11/12 ">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center flex-col items-center">
          <h1
            className="text-[30px] max-sm:text-[20px]"
            style={{ fontFamily: "itl" }}
          >
            NEW ARRIVALS
          </h1>
          <div className="w-11/12 pt-4">
            <ProdCaro>
              {prod.map((product) => (
                <NewArrivals product={product} />
              ))}
            </ProdCaro>
          </div>
          <h1 className="py-5 font-medium  max-sm:text-[12px]">
            VIEW ALL PRODUCTS
          </h1>

          <h1
            className="text-[30px] max-sm:text-[20px] pt-14 max-sm:pt-10"
            style={{ fontFamily: "itl" }}
          >
            BEST SELLERS
          </h1>
          <div className="w-11/12 pt-4">
            <ProdCaro>
              {prod.map((product) => (
                <BestSellers product={product} />
              ))}
            </ProdCaro>
          </div>
          <h1 className="py-5 font-medium max-sm:text-[12px]">
            VIEW ALL PRODUCTS
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between ">
        <div className="grid grid-cols-2 max-sm:grid-cols-1   text-white pt-10 ">
          <div className="relative ">
            <Image src={cat1} className="w-full max-sm:w-half max-sm:h-full " />
            <div className="absolute top-1/3 w-3/4 max-lg:w-3/4">
              <div className="  z-10 border-4  max-lg:border-2 border-l-0 border-white px-6 py-8">
                <h1 className="text-[3.5vw] w-1/2 max-lg:text-[2.5vw] max-sm:text-[5vw]">
                  {" "}
                  SKIN CARE
                </h1>
                <button className=" bg-red-200 rounded-md bg-opacity-75 text-[1.2vw] p-2 max-md:text-[1.8vw] max-sm:mt-3">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          <div className="h-half">
            <div className="relative">
              <Image src={cat2} className="w-full" />
              <div className="absolute top-0 w-3/4">
                <div className="  z-10 border-4 max-lg:border-2 border-t-0 border-white  px-6 py-8 max-md:py-3 max-sm:py-5">
                  <h1 className="text-[3.5vw] w-1/2 max-lg:text-[2.5vw] max-sm:text-[5vw]">
                    MAKE-UP PRODUCTS
                  </h1>
                  <button className=" bg-red-200 rounded-md bg-opacity-75 bg-none text-[1.2vw] p-2 max-md:text-[1.8vw]">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image src={cat3} className="w-full absolute" />
              <div className="absolute w-3/4">
                <div className="  z-10 border-4  max-lg:border-2 border-t-0 border-white  px-6 py-8 max-md:py-3 max-sm:py-5">
                  <h1 className="text-[3.5vw] w-1/2 max-lg:text-[2.5vw] max-sm:text-[5vw]">
                    BEAUTY PRODUCTS
                  </h1>
                  <button className=" bg-red-200 rounded-md bg-opacity-75 bg-none text-[1.2vw] p-2 max-md:text-[1.8vw]">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="relative hidden max-sm:block max-sm:h-[20vw]"></div>
            </div>
          </div>
        </div>

        <div className="w-full py-8 max-sm:hidden">
          <div className="flex w-full relative justify-center items-center ">
            <div className="w-10/12 flex justify-center items-center">
              <h1 className="absolute text-white text-[5vw] w-40 h-40 self-start justify-self-start" style={{ fontFamily: "itl" }}>
                <span className="line-through">25%</span> NOW 50% OFF
              </h1>
              <Image src={col} className="w-[60%] " />
            </div>

            <div className="w-11/12">
              <h1 className="text-[5vw] max-md:text-[4vw]">
                SUMMER COLLECTION
              </h1>
              <p className="w-[90%] text-slate-400 text-[13px] max-md:text-[10px]">
                Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
                gravida orci, fringilla a. Ac sed eu fringilla odio mi.
                Consequat pharetra at magna imperdiet cursus ac faucibus sit
                libero. Ultricies quam nunc, lorem sit lorem urna, pretium
                aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo
                mollis diam sed facilisis at cursus imperdiet cursus ac faucibus
                sit faucibus sit libero.
              </p>
              <button className="border-2 border-black font-medium mt-4 p-2">
                SHOP COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>

      <Suscribe />
    </div>
  );
}
