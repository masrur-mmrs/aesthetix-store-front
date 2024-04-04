'use client'
import Image from "next/image"
import TransparentLogo from "@modules/img/logo-transparent-bg.png"
import HeroBackground from "@modules/img/hero-background.jpeg"


const Hero = () => {

  return (
      <div className="relative">
          <Image
          src={HeroBackground}
          alt="Hero Background"
          objectFit="cover"
          layout="fill"
          sizes="100vh"
          style={{filter: 'brightness(50%)'}}
            />
      <span className="invert">
        <Image
            src={TransparentLogo}
            alt="Logo Transparent"
            layout="responsive"
            height={250}
            width={250}
            />
        </span>
      </div>
  )
}

export default Hero
