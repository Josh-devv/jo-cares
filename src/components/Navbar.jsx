
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../Assets/Logo.svg";
import shhop from "../Assets/shhop.svg";
import Search from "../Assets/Search.svg";
import men from "../Assets/Menu.svg";
import { AiOutlineHeart, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiUserCircleLight, PiHeartLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  useEffect(() => {{
    window.onresize = () => {
        if (window.innerWidth >= 1024) {
            setMenu(false)
        }
    }
  }})

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <section style={{ top: visible ? '0' : '-100px', transition: 'top 0.3s' }}
      className="h-[14vh] max-sm:h-[10vh] bg-transparent fixed w-screen z-50 bg-white text-black  px-10  border-b border-b-black flex items-center justify-center max-sm:px-5">
        <div className="mr-auto">
          <Image src={logo} alt="" width={120} height={120} />
        </div>
        <ul className="flex justify-evenly font-custom gap-12 text-lg text-bold gap-md-5 max-lg:hidden">
          <li className="flex items-center">
            HOME
            <FaCaretDown />
          </li>
          <li className="flex items-center">
            SHOP
            <FaCaretDown />
          </li>
          <li className="flex">CONTACT</li>
        </ul>
        <div className="hidden max-lg:block ml-auto cursor-pointer">
        <Image src={men} alt=""  onClick={handleClick}/>
        </div>
        <ul className="flex ml-auto justify-between items-center font-sans gap-10 max-md:hidden max-lg:ml-0 pl-5">
          <li className="flex text-lg">
            <PiHeartLight className="" size={27} />
            (0)
          </li>
          <li className="flex text-lg">
          <Image src={shhop} alt="" />
            (0)
          </li>
          <li className="flex text">
            <Image src={Search} alt=""  />
          </li>
          <li className="flex text-lg">
            <PiUserCircleLight size={30} />
          </li>
         
        </ul>

        <div className={menu ? `types absolute right-0 top-0 z-10` : ''}>
          <ul className="bg-blue-50 top-0 absolute h-screen shadow-lg right-[-100%] w-10/12 pt-7 pl-20 flex-column max-sm:w-screen max-sm:pl-10">
            <ul className="flex justify-between pt-0">
              <li className="text-2xl">MENU</li>
              <li className="pr-10 cursor-pointer">
                <AiOutlineClose size={25} onClick={handleClick} />
              </li>
            </ul>
            <li className="flex items-center text-lg py-3 pt-16">
              HOME
              <FaCaretDown />
            </li>
            <li className="flex text-lg items-center  py-3 ">
              SHOP
              <FaCaretDown />
            </li>
            <li className="flex text-lg  py-3">CONTACT</li>
            <li className="flex text-lg  py-3">
              WISHLIST
            </li>
            <li className="flex text-lg  py-3">
              ADD TO CART
            </li>
            <li className="flex text-lg  py-3">
              PROFILE
            </li>
            <li className="flex text-lg  py-3">
              <FiSearch size={22} />
            </li>
          </ul>
        </div>
      
      </section>
      
    </>
  );
}

export default Navbar;