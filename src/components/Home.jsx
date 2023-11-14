import Image from "next/image";
import { imgCaro } from "@/components/imgCaro";
import b2 from "@/Assets/banner-large-image2.jpg"
import Caro from "@/components/Caro";
import { BsArrowRight } from "react-icons/bs";
import home from "@/Assets/m1_slider_01.jpg"

function Home() {
  return (
    <div className="w-full relative h-[100vh] flex justify-between items-center">
      <div className="w-half ">
        <div className="absolute pl-10 max-sm:pl-2 top-1/3 w-full">
          <h1 className="text-[90px] max-md:text-[70px] max-sm:text-[38px] w-[5vw] font-rbt " style={{lineHeight:"100px"}}>THE <i>SPRING </i>COLLECTION</h1> 
          <button className="p-4 border-2 w-[200px]  max-sm:text-[15px] 
           border-black rounded-full flex justify-between
            items-center max-sm:bg-black max-sm:text-white font-rbt">
              SHOP NOW <BsArrowRight size={40} className="bg-black rounded-full text-white max-sm:text-black max-sm:bg-white" style={{padding:"13px"}} />
          </button>
        </div>
        
      </div>
      
      <div className="w-1/2 border h-full border-b-black border-l-black">
        <Image src={home} className="w-full shadow-lg object object-cover h-full "/>
      </div>
      
    </div>
  );
}

export default Home;
