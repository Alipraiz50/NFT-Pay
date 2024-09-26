import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NftCard from "./Helper/NftCard";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const BidSlider = () => {
    return (
    <Carousel 
    additionalTransfrom={0} 
    arrows={true} 
    autoPlay={true} 
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass="item"
    >


      <div>
          <NftCard 
          image="/images/nft2.svg" 
          title="Meata forted" 
          author="sajai" 
          price="4.25" 
          />
        </div>
        <div>
          <NftCard 
          image="/images/nft3.svg" 
          title="Fortred" 
          author="sajai" 
          price="5.25" 
          />
        </div>
        <div>
          <NftCard 
          image="/images/nft4.svg" 
          title="Fortred Eastern" 
          author="sajai" 
          price="2.25" 
          />
        </div>
        <div>
          <NftCard 
          image="/images/nft5.svg" 
          title="Eastern" 
          author="sajai" 
          price="7.25" 
          />
        </div>
        <div>
          <NftCard 
          image="/images/nft6.svg" 
          title="Eastern" 
          author="sajai" 
          price="1.25" 
          />
        </div>  
    </Carousel>
 );
};

export default BidSlider;