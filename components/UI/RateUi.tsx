import React from 'react'
import StarIcon from '../Icons/StarIcon'
import Image from 'next/image'

const RateUi = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
    <Image
      src="/images/googleicon.png"
      alt="google icon"
      width={55}
      height={55}
    />

    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <p>5.0</p>
      </div>
      <p>The highest rated web studio in Nigeria</p>
    </div>
  </div>
  )
}

export default RateUi