import React from 'react'

interface ButtonItemProps {
    title: string
}

const ButtonItem: React.FC<ButtonItemProps> = ({title}) => {
  return (
    <button 
        className={`w-[110px] text-[16px] font-normal px-[12px] py-2 text-white rounded-[20px] ${title === 'Đọc tóm tắt' ? 'bg-secondaryColor' : 'bg-primaryColor'} hover:opacity-80`}
    >
        {title}
    </button>
  )
}

export default ButtonItem