'use client'
import Image, { StaticImageData } from "next/image"
import React from "react";

interface DiscountBannerProps {
    src: StaticImageData;
  }
  
  const DiscountBanner: React.FC<DiscountBannerProps> = ({ src }) => {
    return (
      <div className="w-[100vw]">
        <Image src={src} alt="Discount Banner" width={100} height={100} layout="responsive" style={{width: '100vw'}}/>
      </div>
    );
  };
  
  export default DiscountBanner;