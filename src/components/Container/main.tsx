import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='xl:px-[153px] lg:px-[100px] md:px-[60px] sm:px-[20px] w-full h-full'>{children}</div>
  )
}

export default Container