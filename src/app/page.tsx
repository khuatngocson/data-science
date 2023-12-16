import CartItem from '@/components/CartItem/main'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='my-[45px] flex flex-col gap-[45px]'>
      <div className='flex justify-between items-center gap-4'>
        <div className='flex-grow'>
          <input 
            type="text" 
            placeholder='Nhập input của bạn ở đây ...'
            className='text-[18px] border-solid border-primaryBorder border-[1px] px-[20px] py-[14px] rounded-[30px] w-full active:border-primaryColor'
            />
        </div>
        <button className='text-[18px] bg-primaryColor text-white px-[24px] py-[14px] rounded-[30px] hover:opacity-80'>Tìm kiếm</button>
      </div>

      <div className='grid grid-rows-2 grid-flow-col gap-[40px]'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    </div>
  )
}
