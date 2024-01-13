'use client'

//import Suscribe from "@/Components/Suscribe";
import { useContext } from "react";
import { CartContext, useCart } from "@/app/context";
import Navbar from "@/app/Navbar";
import Suscribe from "@/app/Suscribe";



export default function Checkout({params}){

    const { cartItems } = useCart()
    const { totalPrice } = useContext(CartContext)

    return(
        <>
        <div className="h-[10vh]">
          <Navbar />
        </div>
            
            <div className="h-[50vh] max-sm:h-[20vh] bg-gray-100 flex justify-center items-center">
                <div>
                    <div className="text-[50px] font-rbt3">CHECKOUT</div>
                </div>
            </div>

            <div className="mt-20 max-sm:text-[12px] max-sm:mt-10 w-[100%] flex justify-center items-center flex-col  text-white font-rbt4">
                <div className="bg-blue-400 max-sm:py-2 w-[90%] py-6 rounded-md px-3">
                    Returning customer? <span className="border-b-white border-2 rounded border-x-0 border-t-0">Click here to login</span></div>
                <div className="bg-blue-400 w-[90%] py-6 max-sm:py-2 mt-3 rounded-md px-3">
                    Have a coupon? <span className="border-b-white border-2 rounded border-x-0 border-t-0">Click here to enter coupon</span></div>
            </div>

            <div className="mt-10 flex justify-center items-center font-rbt5 w-[100%]">
                <div className="w-[90%] flex max-lg:flex-col-reverse">
                    <div className="w-[50%] max-lg:pt-10 max-lg:w-[100%]">
                        <div className="font-bold">BILLING DETAILS</div>
                        <form>
                        <div className="mb-8 flex">
                        <div className="w-1/2 mr-2">
                            <label className="block mb-1 text-[12px]" htmlFor="firstName">
                            First Name
                            </label>
                            <input
                            type="text"
                            id="firstName"
                            className="w-full   border rounded-sm px-3 py-4"
                            required // Marked as required
                            
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label className="block mb-1 text-[12px]" htmlFor="lastName">
                            Last Name
                            </label>
                            <input
                            type="text"
                            id="lastName"
                            className="w-full  border rounded-sm px-3 py-4"
                            
                            />
                        </div>
                        </div>

                        <div className="mb-8">
                        <label className="block mb-1 text-[12px]" htmlFor="companyName">
                            Company Name(optional)
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            className="w-full  border rounded-sm px-3 py-4"
                            
                        />
                        </div>

                        <div className="mb-8">
                        <label className="block mb-1 text-[12px]" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="w-full  border rounded-sm px-3 py-4"
                            placeholder="House number and street name"
                        />
                        </div>

                        <div className="mb-8">
                        <label className="block mb-1 text-[12px]" htmlFor="country">
                            Country / Region
                        </label>
                        <select
                            id="country"
                            className="w-full  border rounded-sm px-3 py-4"
                            placeholder="United States (US)"
                        >
                            {/* Add options for countries */}
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            {/* Add more countries */}
                        </select>
                        </div>

                        <div className="mb-8">
                        <label className="block mb-1 text-[12px]" htmlFor="town">
                            Town / City
                        </label>
                        <select
                            id="town"
                            className="w-full  border rounded-sm px-3 py-4"
                        >
                            {/* Add options for towns */}
                            <option value="town1">Town 1</option>
                            <option value="town2">Town 2</option>
                            {/* Add more towns */}
                        </select>
                        </div>

                        <div className="mb-8">
                        <label className="flex items-center">
                            <input
                            type="checkbox"
                            className="mr-2"
                            />
                            Create Account
                        </label>
                        </div>

                        <div className="mb-8">
                        <label className="block mb-1 text-[12px]" htmlFor="additionalInfo">
                            Additional Information
                        </label>
                        <textarea
                            id="additionalInfo"
                            className="w-full  border rounded-sm px-3 py-4"
                            rows="3"
                            placeholder="Additional Information"
                        ></textarea>
                        </div>

                        <div>
                        
                        </div>
                        </form> 
                        <Link href="/register">
                            <button className="bg-black text-white p-3 rounded-md mt-4">PROCEED TO CHECKOUT</button>
                        </Link>
                        
                    </div>
                   
                   
                    <div className="w-[50%]  max-lg:w-[100%] font-rbt4">
                    
                        <div className="flex w-[100%] flex-col items-end max-lg:items-start">
                            
                            <div className="flex border justify-between max-lg:w-[100%] w-[80%] bg-white">
                            
                            <div className="bg-gray-400 w-[80%]">
                            
                                <div className="flex flex-col">
                                
                                <div className="font-bold py-8 max-sm:py-4 w-[100%] pl-5">PRODUCT</div>
                                {cartItems.map((product) => (
                                    <div className="flex pl-5 text-[15px] justify-between max-sm:pt-4 border-b bg-white py-8 pb-2" key={product.id}>
                                    <p>{product.title} * {product.quantity}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <div className="bg-gray-400 w-[20%]">
                                <div className="flex flex-col">
                                <div className="font-bold py-8 max-sm:py-4 flex justify-end pr-5 w-[100%]">SUBTOTAL</div>
                                {cartItems.map((product) => (
                                    <div className="flex pr-5 justify-end max-sm:pt-4 border-b py-8 bg-white pb-2" key={product.id}>
                                    <p>${product.price}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                            </div>
                            <div className="flex bg-gray-400 flex-col max-lg:w-[100%] w-[80%] justify-between">
                            <div className="pl-5 font-bold py-8 max-sm:py-4 flex justify-between bg-gray-200">
                                <div>SUBTOTAL</div>
                                <div className="pr-5">${totalPrice}</div>
                            </div>
                            <div className="pl-5 font-bold py-8 max-sm:py-4 flex justify-between bg-gray-400">
                                <div>TOTAL</div>
                                <div className="pr-5">${totalPrice}</div>
                            </div>
                            </div>
                            
                        </div> 
                        </div>
                        


                </div>
            </div>
            <div className="pt-16">
                <Suscribe />
            </div>
            

        </>
    )
}