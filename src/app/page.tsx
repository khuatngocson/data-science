'use client'
import { example_books, get_books } from '@/api/main'
import CartItem from '@/components/CartItem/main'
import { useState } from 'react'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [count, setCount] = useState(10)
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Array<any>>([])

  const handleGetBooks = async () => {
    setLoading(true)
    const res = await get_books({string: inputValue, k: count})
    // const res = await example_books()
    setBooks(res)
    setLoading(false)
  }

  console.log({inputValue, count});

  if(loading) {
    return <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
  }

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
        <div className='border-solid border-primaryBorder border-[1px] px-[30px] py-[14px] rounded-[30px]'>
          <select className='text-[18px]' onChange={(e) => setCount(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <button
          onClick={handleGetBooks}
          className='text-[18px] bg-primaryColor text-white px-[24px] py-[14px] rounded-[30px] hover:opacity-80'
        >Tìm kiếm</button>
      </div>

      {
      books.length !== 0 ? 
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 px-10'>
          {
            books.map((book: any) => {
              return <CartItem title={book.title} author={book.author} chapter={book.chapter} related_content={book.related_content} url={book.url}/>
            })
          }
        </div>
      :
        <div className='text-[50px] font-extrabold text-center text-secondaryColor'>Welcome to Easy Search!</div>
      }
    </div>
  )
}
