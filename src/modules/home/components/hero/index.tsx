'use client'
import Image from "next/image"
import TransparentLogo from "@modules/img/logo-transparent-bg.png"


const Hero = () => {

  return (   
      <div className="h-[80vh] w-full relative bg-no-repeat bg-fixed bg-cover bg-hero bg-right">
        <div className="absolute backdrop-brightness-50 inset-0 z-10 flex flex-col justify-center items-center text-center gap-6 ">
          <span className="invert">
            <Image
            src={TransparentLogo}
            alt="Logo Transparent"
            layout="responsive"
            style={{width: '100vw'}}
            width={250}
            height={250}
            />
          </span>
        </div>
      </div>
  )
}

export default Hero
