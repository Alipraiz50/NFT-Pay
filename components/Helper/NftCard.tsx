import Image from "next/image";
import React from "react";

interface Props {
    image:string;
    title:string;
    author:string;
    price:string;
}

const NftCard = ({ price, title, author, image }: Props) => {
    return (
        <div className="p-4 m-2 bg-white rounded-lg bg-opacity-15">
      <Image 
      src={`${image}`} 
      alt={title} 
      width={400} 
      height={400} 
      className="mx-auto rounded-lg"
      />
      <h1 className="mt-[1.5rem] text-white text-[25px]">{title}</h1>
      <p className="mt-[0.2rem] text-[15px] text-yellow-300">{author}</p>
      <div className="mt-[1.5rem] flex items-center justify-between">
          <button className="px-6 bg-yellow-300 hover:bg-yellow-500 transition-all duration-150
        text-black rounded-lg">
            Place a Bid
            </button>
          <p className="text-[18px] text-white">{price}ETH</p>
      </div>
    </div>
    );
};

export default NftCard;