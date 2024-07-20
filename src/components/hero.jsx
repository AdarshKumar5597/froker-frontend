import { React } from 'react'
import { Link } from 'react-router-dom'
const Hero = ({ blogs }) => {
  
  return (
    <div className='flex flex-col items-center mt-20 space-y-6'>
      <h1 className='text-[2rem]'><span className='text-orange-500'>FROKER</span> BLOG</h1>
      <h1 className='md:text-[3rem] text-[1rem] text-center'>Articles covering the most recent<br />updates and advancements</h1>
      <div className='flex xl:flex-row flex-col xl:items-stretch items-center gap-4 xl:mx-60 lg:mx-40 mx-12'>
        <Link to={`/blog/${blogs[0]?._id}`} className='cursor-pointer flex flex-col xl:w-1/2 space-y-4'>
            <img src={blogs[0]?.imguri} alt={blogs[0]?.title} className='rounded-3xl' />
            <p className='text-orange-500'>by {blogs[0]?.createdby} - {blogs[0]?.createdAt.slice(0, 10)}</p>
            <div className='font-sans space-y-2'>
                <h1 className='text-[1rem] font-medium'>Title: {blogs[0]?.title}</h1>
                <p className='text-[#667085] text-wrap'>{blogs[0]?.heading}</p>
            </div>
            <p className='text-orange-500 font-semibold underline underline-offset-2'>Read More...</p>
        </Link> 
        <div className='flex flex-col xl:w-1/2 space-y-4'>
            <Link to={`/blog/${blogs[1]?._id}`} className='cursor-pointer flex xl:flex-row flex-col items-center xl:h-1/2 xl:space-x-4 xl:space-y-0 space-y-4'>
                <img src={blogs[1]?.imguri} alt={blogs[1]?.title} className='rounded-3xl xl:w-1/2 h-full object-cover' />
                <div className='w-full flex flex-col font-sans space-y-2'>
                    <p className='text-orange-500'>by {blogs[1]?.createdby} - {blogs[1]?.createdAt.slice(0, 10)}</p>
                    <h1 className='text-[1rem] font-medium'>Title: {blogs[1]?.title}</h1>
                    <p className='text-[#667085] text-wrap'>{blogs[1]?.heading}</p>
                    <p className='text-orange-500 font-semibold underline underline-offset-2'>Read More...</p>
                </div>
            </Link>
            <Link to={`/blog/${blogs[2]?._id}`} className='cursor-pointer flex xl:flex-row flex-col items-center xl:h-1/2 xl:space-x-4 xl:space-y-0 space-y-4'>
                <img src={blogs[2]?.imguri} alt={blogs[2]?.title} className='rounded-3xl xl:w-1/2 h-full object-cover' />
                <div className='w-full flex flex-col font-sans space-y-2'>
                    <p className='text-orange-500'>by {blogs[2]?.createdby} - {blogs[2]?.createdAt.slice(0, 10)}</p>
                    <h1 className='text-[1rem] font-medium'>Title: {blogs[2]?.title}</h1>
                    <p className='text-[#667085] text-wrap'>{blogs[2]?.heading}</p>
                    <p className='text-orange-500 font-semibold underline underline-offset-2'>Read More...</p>
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
