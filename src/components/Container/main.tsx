import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='px-[153px] w-full h-full'>{children}</div>
  )
}

export default Container