import Image from 'next/image'
import React from 'react'

const ProjectCard = ({title, image, projectType}:{title: string; image: string; projectType: string}) => {
  return (
    <div className='rounded-xl w-[650px] h-[500px] relative overflow-hidden'>
        <div className='bg-gradient-to-b from-[#0000002c] to-[#00008be3] to-purple-5000 absolute inset-0 z-30'></div>
        <Image src={image} className='w-full h-full object-cover' alt="rushbill" width={400} height={400} />

        <div className='absolute bottom-9 px-6 py-3 z-50 flex items-center w-full justify-between'>
            <h1 className='text-xl font-semibold lg:text-2xl'>{title}</h1>
            <span className='border-white border rounded-full px-5 py-2 text-sm'>{projectType}t</span>
        </div>
    </div>
  )
}

export default ProjectCard