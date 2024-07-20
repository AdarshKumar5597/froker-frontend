import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full flex lg:flex-row flex-col justify-between lg:space-x-16 space-y-8 lg:space-y-0 lg:px-28 px-16'>
        <div className='flex items-center justify-center'>
          <img src={"https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/zfknckgkzlafeqpgwy02"} alt="logo" className="w-40" />
        </div>
        <div className='space-y-2'>
          <h1 className='lg:text-[1.6rem] text-[0rem] font-bold text-orange-500'>Quicklink</h1>
          <div className='flex flex-col lg:space-y-2 space-y-4'>
            <a href='/' className='text-[1.2rem]'>{`>`} Home</a>
            <a href='/' className='text-[1.2rem]'>{`>`} About Us</a>
            <a href='/' className='text-[1.2rem]'>{`>`} Privacy Policy</a>
            <a href='/' className='text-[1.2rem]'>{`>`} Terms & Conditions</a>
          </div> 
        </div>
        <div className='space-y-4'>
          <h1 className='text-[1.6rem] font-bold text-orange-500'>Contacts</h1>
          <a href="https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu" target="_blank" rel="noreferrer" className='flex flex-row space-x-2'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" color="#F76F32" class="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
            <p className='text-[1.2rem]'>Whitefield, Bengaluru, 560066</p>
          </a>
          <a href="mailto:Support@Froker.In" target="_blank" rel="noreferrer" className='flex flex-row space-x-2'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#F76F32" class="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path></svg>
            <p className='text-[1.2rem]'>support@froker.in</p>
          </a>
          <div className='flex flex-row space-x-2'>
            <a href="https://twitter.com/FrokerSocial" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#F76F32" class="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/froker/" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#F76F32" class="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" ><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090044834703&mibextid=YMEMSu" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#F76F32" class="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" ><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
            </a>
            <a href="https://www.instagram.com/frokerofficial/" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#F76F32" class="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" ><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg>
            </a>
            <a href="https://www.youtube.com/@frokerofficial" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#F76F32" class="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" ><path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"></path></svg>
            </a>
          </div>
        </div>
        <div className='space-y-2'>
          <h1 className='lg:text-[1.6rem] text-[0rem] font-bold text-orange-500'>Scan To Download</h1>
          <img src={"https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/lzza9ogvdvfuq07uz5ku"} alt="qr-code" className="lg:w-auto w-0" />
        </div>
      </div>
      <div className='relative'>
        <img src={"https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/aglejnz32j5zfswpju5e"} className='object-cover w-full h-40' alt="" />
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-40 flex flex-row justify-between'>
          <p className='text-white text-[1rem] text-center'>© 2024 Arroz Technology.<br/> All rights reserved
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer

