import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import React from "react";

const Nav = () => {
    return <div className="h-[12vh] bg-[#111D5e]">
        <div className="w-[90%] flex items-center h-[100%] justify-between mx-auto">
            <h1 className="text-[20px] sm:text-[30px] text-white">
                NFT <span className="text-yellow-300">Pay</span>
            </h1>
            <div className="flex items-center space-x-4">
         <div className="h-[50%] hidden md:block relative text-black p-2  bg-gray-100 rounded-lg ">
            <input type="text" 
            className="block outline-none bg-transparent h-[100%] w-[90%]"
            />
<MagnifyingGlassIcon className="w-[1.3rem] h-[1.3rem] text-black absolute top-[20%] right-[1rem]" />
         </div>
     <div className="w-[2rem] hover:bg-red-600 cursor-pointer transition-all duration-200 h-[2rem] 
     sm:w-[3.4rem] sm:h-[3.4rem] rounded-full flex items-center justify-center bg-[#0000003d]">
        <UserIcon className="w-[1.1rem] h-[1.3rem] text-white"/>
     </div>
     <div className="w-[2rem] hover:bg-red-600 relative cursor-pointer transition-all duration-200 h-[2rem] 
     sm:w-[3.4rem] sm:h-[3.4rem] rounded-full flex items-center justify-center bg-[#0000003d]">
        <ShoppingBagIcon className="w-[1.1rem] h-[1.3rem] text-white"/>
        <span className="w-[0.7rem] h-[0.7rem] sm:w-[1.1rem] sm:h-[1.1rem] text-[10px] sm:text-[13px]
        absolute top-0 right-0 items-center justify-center bg-red-600 rounded-full text-white">
            4
            </span>
        </div>
        <button className="px-6 py-2 text-[13px] sm:text-[16px] sm:px-8 sm:py-3 hover:bg-blue-800
        transition-all duration-200 bg-blue-600 text-white rounded-3xl">Connect Wallet</button>
         </div>
        </div>
    </div>;
};

export default Nav;