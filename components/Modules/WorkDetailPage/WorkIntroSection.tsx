import { Container } from '@/components/Container/Container'
import React from 'react'

const WorkIntroSection = ({industry, platform, services, timeline, year}:{industry: string, platform: string, services: string, timeline: string, year: string}) => {
  return (
    <div className='bg-white py-12 lg:py-20 px-5 xl:px-0'>
      <Container>
        <div className='flex flex-wrap justify-between gap-12'>
            <div className='flex flex-col space-y-4'>
                <h4 className=' text-zinc-500 '>Industry</h4>
                <h4 className='text-zinc-900 lg:text-2xl md:text-xl  font-medium'>{industry}</h4>
            </div>
            <div className='flex flex-col space-y-4'>
                <h4 className=' text-zinc-500 '>Platform</h4>
                <h4 className='text-zinc-900 lg:text-2xl md:text-xl  font-medium'>{platform}</h4>
            </div>
            <div className='flex flex-col space-y-4'>
                <h4 className=' text-zinc-500 '>Services</h4>
                <h4 className='text-zinc-900 lg:text-2xl md:text-xl  font-medium'>{services}</h4>
            </div>
            <div className='flex flex-col space-y-4'>
                <h4 className=' text-zinc-500 '>Timeliine</h4>
                <h4 className='text-zinc-900 lg:text-2xl md:text-xl  font-medium'>{timeline}</h4>
            </div>
            <div className='flex flex-col space-y-4'>
                <h4 className=' text-zinc-500 '>Year</h4>
                <h4 className='text-zinc-900 lg:text-2xl md:text-xl  font-medium'>{year}</h4>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default WorkIntroSection