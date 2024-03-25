'use client'
import Image from "next/image"
import TransparentLogo from "@modules/img/logo-transparent-bg.png"


const Hero = () => {

  return (   
      <div className="h-[80vh] w-full border-b border-ui-border-base relative bg-no-repeat  bg-fixed bg-cover bg-hero">
        <div className="absolute backdrop-brightness-50 inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 ">
          <span className="invert">
            <Image
            src={TransparentLogo}
            alt="Logo Transparent"
            width={500}
            height={500}
            />
          </span>
        </div>
      </div>
  )
}

export default Hero
