'use client'
import Image from "next/image"
import TransparentLogo from "@modules/img/logo-transparent-bg.png"
import HeroBackground from "@modules/img/hero-image.jpg"


const Hero = () => {

  return (
      <div className="relative w-full h-screen border-b border-black">
        <Image
            src={TransparentLogo}
            alt="Logo Transparent"
            fill
            style={{filter: 'invert(1)', objectFit: 'contain'}}
            className="z-10"
            />
          <Image
          src={HeroBackground}
          alt="Hero Background"
          fill
          style={{filter: 'brightness(50%)', objectFit: 'cover'}}
          className="absolute inset-0"
            />
      </div>
  )
}

export default Hero
