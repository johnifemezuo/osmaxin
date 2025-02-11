import RightIcon from '@/components/Icons/RightIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TestimonialCard = ({image, name, title, testimonial}:{image: string; name: string; title: string; testimonial: string}) => {
  return (
    <div className="flex flex-col bg-[#232373] rounded-lg max-w-[500px]  justify-between px-8 py-10 relative">
            <div className="w-20 border-[#4D4D79] border-4 absolute top-8 -left-12 h-20  bg-[#4D4D79] rounded-lg ">
              <Image
                src={image}
                width={40}
                height={40}
                alt="Osmaxin"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="space-y-4 pl-6">
              <div className="">
                <h1 className="text-2xl font-bold text-white mb-2">{name}</h1>
                <p className="text-[#AEADD2] text-sm font-medium">{title}</p>
              </div>

              <p className="text-white lg:text-lg">
                {testimonial}
              </p>

              <Link href="/" className="flex items-center space-x-2">
                <p className="uppercase underline">See project</p>
                <RightIcon className="text-white" />
              </Link>
            </div>
          </div>
  )
}

export default TestimonialCard