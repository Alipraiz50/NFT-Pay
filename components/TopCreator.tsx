import React from "react";
import CreatorCard from "./Helper/CreatorCard";

const TopCreator = () => {
    return <div className="pb-[3rem] pt-[5rem] bg-blue-950">
        <div className="text-center">
          <p className="heading__mini">Creator</p>
          <h1 className="heading__primary">
         Top <span className="text-yellow-300">Creators</span> of today</h1>
        </div>
        <div className="w-[80%] pt-[5rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        xl:grid-cols-6 gap-[2rem]">
         <div>
            <CreatorCard 
            image="/user6.png"
            user="Tom Lee" 
            price="734.5ETH" 
            />
         </div>
         <div>
            <CreatorCard 
            image="/user1.png"
            user="John Lee" 
            price="434.5ETH" 
            />
         </div>
         <div>
            <CreatorCard 
            image="/user2.png"
            user="Bohn Lee" 
            price="534.5ETH" 
            />
         </div>
         <div>
            <CreatorCard 
            image="/user3.png"
            user="Lohn Lee" 
            price="634.5ETH" 
            />
         </div>
         <div>
            <CreatorCard 
            image="/user4.png"
            user="oom Lee" 
            price="934.5ETH" 
            />
         </div>
         <div>
            <CreatorCard 
            image="/user5.png"
            user="cohm Lee" 
            price="734.5ETH" 
            />
         </div>
        </div>
    </div>;

};

export default TopCreator;