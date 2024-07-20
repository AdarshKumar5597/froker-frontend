import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse items-center space-y-4 lg:space-y-0 lg:mx-72 mx-8 rounded-2xl border-2 space-x-4 border-slate-300 p-8'>
      <img src="https://res.cloudinary.com/de7hlbfce/image/upload/v1721478483/Froker/crvak8icuhxrkjjhoeje.png" className='lg:w-60 mt-20 lg:mt-0' alt="" />
      <div className='flex flex-col space-y-4'>
        <h1 className='lg:font-bold font-normal lg:text-[2rem] text-[1rem] lg:text-left text-center'><span className='font-bold lg:font-normal'>Subscribe</span><br/> to our newsletter to get the latest updates and news</h1>
        <div className='flex lg:flex-row flex-col items-center lg:space-y-0 space-y-4 justify-between'>
            <input 
                type='email'
                placeholder='Enter your email'
                className=' placeholder:text-slate-400 border-2 border-slate-300 lg:rounded-tl-full lg:rounded-bl-full py-2 px-4 w-full rounded-full'
            />
            <button className='bg-orange-500 text-white lg:w-auto w-1/2 lg:rounded-tr-full lg:rounded-br-full rounded-full p-2 lg:px-16'>Subscribe</button>
        </div>
      </div>

    </div>
  )
}

export default Subscribe
