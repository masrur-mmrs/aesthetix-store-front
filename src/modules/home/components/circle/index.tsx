import { clx } from '@medusajs/ui';
import React, { useEffect, useState } from 'react'

function Circle() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

  return (
    <div className={clx("absolute h-[60vw] w-[60vw] bg-black rounded-full -z-10 lg:-bottom-[10%] lg:-right-[14%] md:-bottom-[40%] md:-right-[15%] sm:-bottom-[50%] sm:right-[0%] min-[300px]:-bottom-[5%] min-[300px]:right-[20%] transition duration-300 ease-in trasnform-gpu", loaded?"scale-100":"scale-0")}>
    </div>
  )
}

export default Circle