import Image from 'next/image'
import React from 'react'
import ButtonItem from '../ButtonItem/main'

interface CartItemProps {
    title: string
    author: string
    intro: string
    url: string
}

const CartItem:React.FC<CartItemProps> = ({title, author, intro, url}) => {
  return (
    <div className='w-[300px] rounded-[10px] border-[1px] border-primaryBorder overflow-hidden'>
        <div className='w-full h-[200px] relative'>
            <Image fill className='object-fit' src={'/test-picture.png'} alt=''/>
        </div>
        <div className='p-[10px] flex flex-col gap-4'>
            <div className='font-semibold text-[18px] leading-[24px] text-justify'>{title}</div>
            <div className='flex justify-between items-center'>
                <div className='font-semibold text-[18px] text-secondaryColor'>Tác giả</div>
                <div className='font-semibold text-[18px] text-primaryColor'>{author}</div>
            </div>
            <div className='flex justify-between'>
                <ButtonItem title='Đọc tóm tắt'/>
                <ButtonItem title='Đọc truyện' url={url}/>
            </div>
        </div>
    </div>
  )
}

export default CartItem