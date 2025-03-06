import React, { useEffect } from 'react'
import ScrowStar from '../Icons/ScrowStar'
import { useCarouselFunctions } from '@/base/hooks/useCarouselfunctions';

const Maquee = () => {
  const {
    emblaRef,
    toggleAutoplay
  } = useCarouselFunctions();

  useEffect(() => {
    toggleAutoplay();
  }, [toggleAutoplay]);
  
  return (
    <div className="bg-secondary py-6 xl:py-8 w-full px-8 overflow-hidden overflow-x-hidden  slider lg:py-20  md:space-y-12 space-y-12">
      <div ref={emblaRef} className=" flex items-center space-x-5 whitespace-nowrap  w-full overflow-hidden lg:w-full flex-items md:gap-12">
        <div className="slide-track w-full overflow-hidden lg:w-full flex-items md:gap-12">
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
            We love to work with
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
            FINANCIAL
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
            HOSPITALS
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
            EDUTECH
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
            AGRITECH
          </h1>
          <ScrowStar />
          <h1 className="uppercase text-white lg:text-5xl text-xl font-medium">
            BUSINESSES
          </h1>
        </div>
      
      </div>
    </div>
  )
}

export default Maquee