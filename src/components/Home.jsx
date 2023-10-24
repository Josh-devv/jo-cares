import Image from "next/image";
import { imgCaro } from "@/Components/imgCaro";
import Caro from "@/Components/Caro";
import { useEffect } from "react";


function Home() {
  return (
    <>
      <Caro>
        {imgCaro.map((imggs) => (
          <div key={imggs.id} className="relative" id={`img${imggs.id}`}>
            <Image className="w-screen h-screen obj relative"  src={imggs.image} />  
            <div style={{transform: 'translate(-50%, -50%)'}} className="max-md:top-[50%] animate-slideIn  transition-opacity duration-300 ease-in-out absolute flex flex-col justify-center items-center top-[60%] text-white w-screen left-1/2 mx-auto text-center">
              <h1 className="text-[80px] max-sm:text-[33px]" style={{fontFamily: 'ptserifr'}}>{imggs.head}</h1>
              <p className="w-1/2 max-lg:w-10/12 max-sm:text-[13px]" style={{fontFamily: 'ptserifr'}}>{imggs.title}</p>
              <p className="border-2 p-3 w-[300px] m-4  flex justify-center hover:scale-105 transform transition duration-300 ease-in-out" style={{fontFamily:'ptserifr'}}>
                {imggs.shop}</p>
            </div>
          </div>
        ))}
      </Caro> 
</>
  );
}

export default Home;
