import React from 'react'

const PageContainer = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="max-w-[900px] mx-auto">{children}</div>
  )
}

export default PageContainer