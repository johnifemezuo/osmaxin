import React from 'react'
import ScrowStar from '../Icons/ScrowStar'

const Maquee = () => {
  return (
    <div className="bg-secondary py-6 xl:py-8 w-full px-8  -ml- overflow-hidden ">
    <div className="flex items-center space-x-5 w-[2000px]">
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
      BUSINESSES
      </h1>
    </div>
  </div>
  )
}

export default Maquee