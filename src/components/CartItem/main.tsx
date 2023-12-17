import Image from 'next/image'
import React, { useState } from 'react'
import ButtonItem from '../ButtonItem/main'
import ModalContent from '../ModalContent/main'

interface CartItemProps {
    title: string
    author: string
    chapter: string
    related_content: string
    url: string
}

const CartItem:React.FC<CartItemProps> = ({title, author, related_content, url, chapter}) => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[320px] rounded-[10px] border-[1px] border-primaryBorder overflow-hidden'>
                <div className='w-full h-[200px] relative'>
                    <Image fill className='object-fit' src={'/test-picture.png'} alt=''/>
                </div>
                <div className='p-[10px] flex flex-col gap-2'>
                    <div className='font-semibold text-[18px] leading-[24px] line-clamp-2 h-[48px]'>{title}</div>
                    <div className='flex justify-between items-center'>
                        <div className='font-semibold text-[18px] text-secondaryColor'>Tác giả</div>
                        <div className='font-semibold text-[18px] text-primaryColor'>{author}</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='font-semibold text-[18px] text-secondaryColor'>Chapter</div>
                        <div className='font-semibold text-[18px] text-primaryColor'>{chapter}</div>
                    </div>
                    <div className='flex justify-between'>
                        <ButtonItem title='Đọc tóm tắt' handleOpenModal={handleOpenModal}/>
                        <ButtonItem title='Đọc truyện' url={url}/>
                    </div>
                </div>
            </div>
            <ModalContent title={title} chapter={chapter} related_content={related_content} showModal={showModal} handleCloseModal={handleCloseModal}/>
        </div>
    )
}

export default CartItem