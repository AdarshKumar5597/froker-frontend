import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Posts = ({ blogs }) => {
  const { id } = useParams();
  const [length, setLength] = useState([]);
  const [page, setPage] = useState(1);
  const [newBlogs, setNewBlogs] = useState([]);
  const len = blogs.length;
  const postsPerPage = 9;

  useEffect(() => {
    const totalPages = Math.ceil(len / postsPerPage);
    setLength(Array.from({ length: totalPages }, (element, i) => i + 1));
    updateBlogs(page);
  }, [len, page]);

  const handlePageChange = (newPage) => {
    newPage = Math.max(newPage, 1);
    newPage = Math.min(newPage, length.length);
    setPage(newPage);
  };

  const updateBlogs = (page) => {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = Math.min(page * postsPerPage, len);
    setNewBlogs(blogs.slice(startIndex, endIndex));
  };

  useEffect(() => {
    updateBlogs(page);
  }, [page]);

  return (
    <div className='xl:mx-60 lg:mx-40 mx-12 space-y-16'>
      <h1 className='text-[2.25rem] mt-16 mb-8'>{id !== undefined ? "Popular posts" : "Recent Posts"}</h1>
      <div className='lg:grid grid-rows-3 grid-cols-3 gap-4 flex flex-col lg:space-y-0 space-y-4'>
        {newBlogs.map((item, index) => (
          <Link to={`/blog/${item?._id}`} key={index} className='w-full cursor-pointer flex flex-col items-center space-y-4'>
            <img src={item?.imguri} alt={item?.title} className='rounded-3xl object-cover h-[40vh]' />
            <div className='w-full flex flex-col font-sans space-y-2'>
              <p className='text-orange-500'>by {item?.createdby} - {item?.createdAt.slice(0, 10)}</p>
              <h1 className='text-[1rem] font-medium'>Title: {item?.title}</h1>
              <p className='text-[#667085]'>{item?.heading}</p>
              <p className='text-orange-500 font-semibold underline underline-offset-2'>Read More...</p>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex flex-row items-center justify-center space-x-4'>
        <button onClick={() => handlePageChange(page - 1)} className={`ring-2 p-4 ring-slate-300 w-6 h-6 flex justify-center items-center rounded-full hover:bg-[#EAEAEA] text-black mx-1`}>{'<'}</button>
        {length.map((item) => (
          <button onClick={() => handlePageChange(item)} key={item} className={`ring-2 p-4 ${(item === page) ? "bg-[#EAEAEA]" : "bg-white"} ring-slate-300 hover:bg-slate-200 w-6 h-6 flex justify-center items-center rounded-full text-black mx-1`}>{item}</button>
        ))}
        <button onClick={() => handlePageChange(page + 1)} className={`ring-2 p-4 ring-slate-300 w-6 h-6 flex justify-center items-center rounded-full hover:bg-[#EAEAEA] text-black mx-1`}>{'>'}</button>
      </div>
    </div>
  );
}

export default Posts;
