import Image from 'next/image'
import React from 'react'
import ButtonItem from '../ButtonItem/main'

const CartItem = () => {
  return (
    <div className='w-full rounded-[10px] border-[1px] border-primaryBorder overflow-hidden'>
        <div className='w-full h-[200px] relative'>
            <Image fill className='object-fit' src={'/test-picture.png'} alt=''/>
        </div>
        <div className='p-[10px] flex flex-col gap-4'>
            <div className='font-semibold text-[18px] leading-[24px] text-justify'>Sau khi xuyên sách nữ phụ được năm ca ca cưng chiều</div>
            <div className='flex justify-between items-center'>
                <div className='font-semibold text-[18px] text-secondaryColor'>Tác giả</div>
                <div className='font-semibold text-[18px] text-primaryColor'>Mặc Phi Bảo Bảo</div>
            </div>
            <div className='flex justify-between'>
                <ButtonItem title='Đọc tóm tắt'/>
                <ButtonItem title='Đọc truyện'/>
            </div>
        </div>
    </div>
  )
}

export default CartItem