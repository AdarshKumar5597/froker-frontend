import React, { Children } from 'react'
import { Nav, Posts, Subscribe, Footer } from './components'

const Layout = ({children}) => {
    let blogsHero = [
        {
          id: 1,
          title: "How to invest in the sto...",
          introduction: "This is a blog post that teaches you how to invest in the stock market and create a diversified portfolio with different investme...",
          body: <p>In this blog post, we will cover the basics of stock market investing, including how to analyze stocks, create a diversified portfolio, and manage risk. We will also discuss different investment strategies and provide tips for beginners. By the end of this post, you will have a solid understanding of how to get started with investing in the stock market.</p>,
          author: "John Doe",
          date: "2022-01-01",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 10,
        },
        {
          id: 2,
          title: "The benefits of real estate investing",
          introduction: "This is a blog post that discusses the benefits of real estate investing",
          body: <p>Real estate investing is a popular way to build wealth and generate passive income. In this blog post, we will explore the benefits of real estate investing, including potential tax advantages, cash flow, and appreciation. We will also discuss different types of real estate investments and provide tips for getting started. By the end of this post, you will have a solid understanding of the benefits of real estate investing and how to get started.</p>,
          author: "Jane Smith",
          date: "2022-01-02",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 20,
        },
        {
          id: 3,
          title: "How to save money for retirement",
          introduction: "This is a blog post that explains how to save money for retirement",
          body: <p>Retirement planning is an important part of financial planning. In this blog post, we will discuss how to save money for retirement, including setting financial goals, creating a budget, and investing in retirement accounts. We will also explore different retirement savings strategies and provide tips for maximizing your savings. By the end of this post, you will have a solid understanding of how to save money for retirement and achieve your financial goals.</p>,
          author: "Alice Johnson",
          date: "2022-01-03",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 30,
        }
      ]
    
    let blogsPosts = [
        {
          id: 1,
          title: "How to invest in the stock market",
          introduction: "This is a blog post that discusses the benefits of real estate investing",
          body: <p>In this blog post, we will cover the basics of stock market investing, including how to analyze stocks, create a diversified portfolio, and manage risk. We will also discuss different investment strategies and provide tips for beginners. By the end of this post, you will have a solid understanding of how to get started with investing in the stock market.</p>,
          author: "John Doe",
          date: "2022-01-01",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 10,
        },
        {
          id: 2,
          title: "The benefits of real estate investing",
          introduction: "This is a blog post that discusses the benefits of real estate investing",
          body: <p>Real estate investing is a popular way to build wealth and generate passive income. In this blog post, we will explore the benefits of real estate investing, including potential tax advantages, cash flow, and appreciation. We will also discuss different types of real estate investments and provide tips for getting started. By the end of this post, you will have a solid understanding of the benefits of real estate investing and how to get started.</p>,
          author: "Jane Smith",
          date: "2022-01-02",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 20,
        },
        {
          id: 3,
          title: "How to save money for retirement",
          introduction: "This is a blog post that explains how to save money for retirement",
          body: <p>Retirement planning is an important part of financial planning. In this blog post, we will discuss how to save money for retirement, including setting financial goals, creating a budget, and investing in retirement accounts. We will also explore different retirement savings strategies and provide tips for maximizing your savings. By the end of this post, you will have a solid understanding of how to save money for retirement and achieve your financial goals.</p>,
          author: "Alice Johnson",
          date: "2022-01-03",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 30,
        },
        {
          id: 4,
          title: "Title 4",
          introduction: "Introduction 4",
          body: <p>Body 4</p>,
          author: "Author 4",
          date: "2022-01-04",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 40,
        },
        {
          id: 5,
          title: "Title 5",
          introduction: "Introduction 5",
          body: <p>Body 5</p>,
          author: "Author 5",
          date: "2022-01-05",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 50,
        },
        {
          id: 6,
          title: "Title 6",
          introduction: "Introduction 6",
          body: <p>Body 6</p>,
          author: "Author 6",
          date: "2022-01-06",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 60,
        },
        {
          id: 7,
          title: "Title 7",
          introduction: "Introduction 7",
          body: <p>Body 7</p>,
          author: "Author 7",
          date: "2022-01-07",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 70,
        },
        {
          id: 8,
          title: "Title 8",
          introduction: "Introduction 8",
          body: <p>Body 8</p>,
          author: "Author 8",
          date: "2022-01-08",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 80,
        },
        {
          id: 9,
          title: "Title 9",
          introduction: "Introduction 9",
          body: <p>Body 9</p>,
          author: "Author 9",
          date: "2022-01-09",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 90,
        },
        {
          id: 10,
          title: "Title 10",
          introduction: "Introduction 10",
          body: <p>Body 10</p>,
          author: "Author 10",
          date: "2022-01-10",
          image: "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier",
          likes: 100,
        },
      ];
  return (
    <div className='flex flex-col space-y-16'>
        
    </div>
  )
}

export default Layout
