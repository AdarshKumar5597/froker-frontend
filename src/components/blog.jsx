import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import Posts from "./posts";
import Footer from "./footer";

const Blog = () => {
  const { id } = useParams();
  console.log(id);
  const [like, setLike] = useState(true);

  const [blogposts, setBlogposts] = useState([]);
  const [blog, setBlog] = useState(null);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/popular");
      const data = await response.json();
      console.log(data.blogs);
      setBlogposts(data.blogs);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBlogById = async () => {
    try {
      const response = await fetch(`http://localhost:4000/blogs/${id}`);
      const data = await response.json();
      console.log(data.blog);
      setBlog(data.blog);
    } catch (error) {
      console.error(error);
    }
  
  }

  const updateLikes = async () => {
    try {
      if (like) {
        const response = await fetch(`http://localhost:4000/blogs/${id}/like`, {
          method: "POST",
        });
        const data = await response.json();
        console.log(data);
        setBlog(data.blog);
        setLike(!like);
      }
      else {
        const response = await fetch(`http://localhost:4000/blogs/${id}/like`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        setBlog(data.blog);
        setLike(!like);
      }
    } catch (error) {
      console.error(error);
    }
  
  }

  useEffect(() => {
    fetchBlogById();
    console.log("Blog: ", blog);
    fetchBlogPosts();
    console.log("BlogsPosts: ", blogposts);
  }, []);

  return (
    <>
    <Nav />
      <div className="">
        <div className="flex flex-col lg:mx-48 mx-8 space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="">
              Blog {`>`} Title: {blog?.title}
            </h1>
            <div className="relative">
              <img
                src={
                  blog?.imguri
                }
                alt=""
                className="rounded-3xl lg:h-auto h-96 object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/80 to-transparent rounded-3xl"></div>
              <p className="absolute bottom-0 left-3 text-white font-bold lg:text-[2rem] p-2 uppercase w-[80%]">
                Title: {blog?.title}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-2 text-orange-500 items-center">
              <p>by {blog?.createdby}</p>
              <div className="flex flex-row items-center space-x-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="clock"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 8 14"></polyline>
                </svg>
                <p>2 minute read</p>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <button onClick={async() => await updateLikes()}>
                <img
                  src={
                    like
                      ? "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707285106/Frokerassets/Artboard_ne0yo2.jpg"
                      : "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706522062/Frokerassets/Page-1_igjnhi.jpg"
                  }
                  alt=""
                  className="w-10 h-10"
                />
              </button>
              <div className="text-[1.2rem]">{blog?.likes} likes</div>
            </div>
          </div>
          <div className="">
            <p>
              {blog?.description}
            </p>
            </div>
          <img
            src={
              "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier"
            }
            alt=""
            className="w-full h-96 rounded-3xl object-cover"
          />
        </div>

      </div>
      <Posts blogs={blogposts} />
      <Footer />
    </>
  );
};

export default Blog;
