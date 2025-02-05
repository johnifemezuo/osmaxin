import React from 'react'

export const Container = ({children, className}:{children?: React.ReactNode; className?: string;}) => {
  return (
    <div className={`${className} max-w-[1400px] mx-auto`}>{children}</div>
  )
}
