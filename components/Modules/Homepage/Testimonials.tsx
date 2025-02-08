import { Container } from '@/components/Container/Container'
import SubTitle from '@/components/Elements/SubTitle'
import { ArrowRight } from '@/components/Icons/ArrowRight'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000 py-20 lg:py-32">
        <Container>
            <div>
                <SubTitle>Testimonials</SubTitle>
             <div className="mt-4 lg:flex items-center justify-between w-full">
                        <h1 className="text-xl lg:text-3xl font-semibold text-zinc-700">
                        What our clients thinks of us
                        </h1>
            
                        <div className="flex space-x-4">
                          <span className="w-12 h-12 border-white grid place-content-center rounded-full border">
                            <ArrowRight className="text-white rotate-180" />
                          </span>
                          <span className="w-12 h-12 bg-white border-white grid place-content-center rounded-full border">
                            <ArrowRight className="text-primary " />
                          </span>
                        </div>
                      </div>
            </div>


            <div>
                
                              <div className="flex flex-col bg-primary rounded-lg max-w-[500px]  justify-between px-8 py-10 relative">
                                <div className="w-14 h-14 mb-5 bg-[#232373] rounded-full  items-center justify-center grid place-content-center ">
                                  <Image
                                    src="/images/pros-10.png"
                                    width={40}
                                    height={40}
                                    alt="Osmaxin"
                                  />
                                </div>
                
                                <div className="space-y-4">
                                  <h1 className="text-2xl font-bold text-white mb-2">
                                    John Deo
                                  </h1>
                                  <p className="text-[#AEADD2] text-sm font-medium">
                                  CEO Evon
                                  </p>
                
                                  <p className="text-white">
                                  Osmaxin offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years of our cooperation.
                                  </p>
                
                                  
                                </div>
                              </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials