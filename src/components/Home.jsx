import Image from "next/image";
import { imgCaro } from "@/components/imgCaro";
import b2 from "@/Assets/banner-large-image2.jpg"
import Caro from "@/components/Caro";

function Home() {
  return (
    <>
      <Caro>
        {imgCaro.map((imggs) => (
          <div key={imggs.id} className="relative font-custom" id={`img${imggs.id}`}>
            <Image className=" w-[100%] h-[100vh] relative"  alt="" src={imggs.image} />  
            <div style={{transform: 'translate(-50%, -50%)'}} className="max-md:top-[50%]  animate-slideIn  transition-opacity duration-300 ease-in-out absolute flex flex-col justify-center items-center top-[60%] text-white w-screen left-1/2 mx-auto text-center">
              <h1 className="text-[6vw] max-sm:text-[33px] italic text" >{imggs.head}</h1>
              <p className="w-1/2 max-lg:w-10/12 max-sm:text-[13px]" style={{fontFamily: 'ptserifr'}}>{imggs.title}</p>
              <p className="p-3 font-rbt w-[300px] rounded-md bg-black m-4 max-sm:w-[250px] flex justify-center hover:scale-105 transform transition duration-300 ease-in-out">
                {imggs.shop}</p>
            </div>
          </div>
        ))}
      </Caro> 
  </>
  );
}

export default Home;
