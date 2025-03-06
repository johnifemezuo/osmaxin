
import { Container } from '@/components/Container/Container'
import React from 'react'
import parse from "html-react-parser";
import { ScrollReveal } from '@/components/Animations/ScrollReveal';

export const ProjectDetails = ({details}:{details: any}) => {
  const projectContent = details?.html || "";

  return (
    <div className='bg-white py-12 lg:py-20 px-5 xl:px-0'>
        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
        <Container> 
            <div className='pageStyle'>   
                {parse(projectContent as any)}
            </div>
        </Container>
        </ScrollReveal>
    </div>
  )
}