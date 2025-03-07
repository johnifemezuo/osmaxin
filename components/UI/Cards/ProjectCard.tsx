import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const ProjectCard = ({title, image, projectType, slug}:{title: string; image: string; projectType: string, slug: string}) => {
  return (
<Link href={`/works/${slug}`}>
<div className='rounded-xl w-[360px] sm:w-[500px] lg:w-[550px] flex-shrink-0 xl:w-[660px] h-[400px] xl:h-[500px]  relative overflow-hidden'>
        <div className='bg-gradient-to-b from-[#0000002c] to-[#00008be3] to-purple-5000 absolute inset-0 z-30'></div>
        <Image src={image} className='w-full h-full object-cover' alt="rushbill" width={400} height={400} />

        <div className='absolute bottom-3 px-6 py-3 z-50 space-y-3 lg:flex lg:flex-row  lg:items-center w-full justify-between'>
            <h1 className='text-xl font-semibold lg:text-2xl'>{title}</h1>
            <div className='inline-flex border-white border rounded-full px-5 py-2 text-sm'>{projectType}</div>
        </div>
    </div>
</Link>
  )
}

export default ProjectCard