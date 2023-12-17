'use client'
import { example_books, get_books } from '@/api/main'
import CartItem from '@/components/CartItem/main'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Array<any>>([])

  const handleGetBooks = async () => {
    setLoading(true)
    const res = await get_books({string: inputValue, k: 10})
    // const res = await example_books()
    setBooks(res)
    setLoading(false)
  }

  if(loading) {
    return "Loading data ..."
  }

  // if(inputValue ===  '') {
  //   setLoading(false)
  // }

  return (
    <div className='my-[45px] flex flex-col gap-[45px]'>
      <div className='flex justify-between items-center gap-4'>
        <div className='flex-grow'>
          <input 
            type="text" 
            placeholder='Nhập input của bạn ở đây ...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='text-[18px] border-solid border-primaryBorder border-[1px] px-[20px] py-[14px] rounded-[30px] w-full active:border-primaryColor'
            />
        </div>
        <button
          onClick={handleGetBooks}
          className='text-[18px] bg-primaryColor text-white px-[24px] py-[14px] rounded-[30px] hover:opacity-80'
        >Tìm kiếm</button>
      </div>

      {
      books.length !== 0 ? 
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>
          {
            books.map(book => {
              return <CartItem title={book.title} author={book.author} intro={book.intro} url={book.url}/>
            })
          }
        </div>
      :
        <div className='text-[50px] font-extrabold text-center text-secondaryColor'>Welcome to Easy Search!</div>
      }
    </div>
  )
}
