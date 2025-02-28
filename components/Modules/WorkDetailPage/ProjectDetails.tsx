
import { Container } from '@/components/Container/Container'
import React from 'react'
import parse from "html-react-parser";

export const ProjectDetails = ({details}:{details: any}) => {
  const projectContent = details?.html || "";

  return (
    <div className='bg-white py-12 lg:py-20 px-5 xl:px-0'>
        <Container> 
            <div className='pageStyle'>   
                {parse(projectContent as any)}
            </div>
            
        </Container>
    </div>
  )
}