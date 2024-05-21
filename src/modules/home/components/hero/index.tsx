'use client'
import Image from "next/image"
import TransparentLogo from "@modules/img/logo-transparent-bg.png"
import HeroImage from "@modules/img/HeroImage.png"
import ScrollDown from "../scroll-down"
import Circle from "../circle"


const Hero = () => {

  return (
        <div className="sm:flex justify-between justify-items-center border-b">
            <div className="relative lg:overflow-hidden md:overflow-hidden sm:overflow-hidden">
              <Image
                src={TransparentLogo}
                alt="Logo"
              />
              <div className="z-20 flex items-center justify-center">
                <div className="h-full w-full flex items-center justify-center"><ScrollDown/></div>
              </div>
            </div>
            <div className="relative overflow-hidden w-full">
              <Circle/>
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="z-10"
              />
            </div>
        </div>
  )
}

export default Hero
