'use client'
import Image from "next/image"
import TransparentLogo from "@modules/img/logo-transparent-bg.png"
import HeroBackground from "@modules/img/hero-background.jpeg"


const Hero = () => {

  return (
      <div className="relative w-full h-screen">
        <Image
            src={TransparentLogo}
            alt="Logo Transparent"
            layout="fill"
            objectFit="contain"
            sizes="75vh"
            style={{filter: 'invert(1)'}}
            className="z-10"
            />
          <Image
          src={HeroBackground}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          style={{filter: 'brightness(50%)'}}
          className="absolute inset-0"
            />
      </div>
  )
}

export default Hero
