import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import home from "@/Assets/m1_slider_01.jpg"
import home2 from "@/Assets/single-product1.jpg"
import AOSWarapper from "@/components/AOSWarapper";


function Home() {
  return (
    <div className="w-full relative h-[100vh] flex justify-between items-center">
       <AOSWarapper/>
    <div className="w-half ">
      <div className="absolute pl-10 z-10 max-sm:pl-4 top-1/3 w-full">
        <h1 data-aos="zoom-out-down" data-aos-duration="500" className="text-[90px] max-lg:text-[70px] max-sm:text-white max-custom-sm2:text-[38px] max-sm:z-10 max-custom-sm:text-[48px] max-md:text-[70px] w-[5vw] font-custom " style={{lineHeight:"110px"}}>THE <i>SPRING </i>COLLECTION</h1> 
        <button className="p-4 max-sm:p-3 border-2 w-[200px]  max-sm:text-[15px] max-sm:z-50
         border-black rounded-full flex justify-between
          items-center max-sm:bg-white max-sm:text-black font-rbt">
            SHOP NOW 
            <BsArrowRight size={40} className="bg-black rounded-full
             text-white max-sm:text-white max-sm:bg-black" 
             style={{padding:"13px"}} />
        </button>
      </div>
    </div>
    <div className="w-1/2  max-sm:w-full border h-full border-b-black border-l-black">
      <Image src={home} className="w-full max-sm:hidden  shadow-lg  object-cover h-full "/>
      <Image src={home2} className="w-full hidden max-sm:block  shadow-lg  object-cover h-full "/>
      
    </div>
    <div class="h-screen hidden max-sm:block w-full bg-gradient-to-b from-transparent via-black/100 to-black absolute"></div>

  </div>
  );
}

export default Home;
