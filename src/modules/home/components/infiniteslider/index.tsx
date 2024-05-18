'use client';
import Logo from "@modules/img/Aesthetix.png"
import Image from "next/image";

const LOGOS = [
  <Image key={0} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={1} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={2} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={3} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={4} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={5} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={6} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={7} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={8} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={9} src={Logo} alt="logo" width={1400} height={400}></Image>,
  <Image key={10} src={Logo} alt="logo" width={1400} height={400}></Image>,
]


const InfiniteSlider = () => {
  return (
    <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)]">
      <div className="animate-infinite-slider flex w-[calc(800px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;