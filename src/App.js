import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Hero, Nav, Posts, Footer, Subscribe } from "./components";

function App() {
  const [blogsHero, setBlogsHero] = useState([]);
  const [blogposts, setBlogposts] = useState([]);
  const [loadingHero, setLoadingHero] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const blogpostsRef = useRef(blogposts);

  const fetchBlogPosts = async () => {
    setLoadingPosts(true);
    try {
      const response = await fetch("https://froker-backend-up9a.onrender.com/blogs");
      const data = await response.json();
      console.log(data.blogs);

      if (JSON.stringify(data.blogs) !== JSON.stringify(blogpostsRef.current)) {
        setBlogposts(data.blogs);
        blogpostsRef.current = data.blogs;
      }
      setLoadingPosts(false);
    } catch (error) {
      console.error(error);
      setLoadingPosts(false);
    }
  };

  const fetchBlogHeroPosts = async () => {
    setLoadingHero(true);
    try {
      const response = await fetch(
        "https://froker-backend-up9a.onrender.com/blogs/popular/first-three"
      );
      const data = await response.json();
      console.log(data.blogs);
      setBlogsHero(data.blogs);
      setLoadingHero(false);
    } catch (error) {
      console.error(error);
      setLoadingHero(false);
    }
  };

  useEffect(() => {
    fetchBlogHeroPosts();
    console.log("BlogsHero: ", blogsHero);

    fetchBlogPosts();
    console.log("BlogsPosts: ", blogpostsRef.current);

  }, []);

  return (
    <div className="w-full flex flex-col space-y-16">
      <Nav />
      {loadingHero ? <h1>Loading...</h1> : <Hero blogs={blogsHero} />}
      {loadingPosts ? <h1>Loading...</h1> : <Posts blogs={blogposts} />}
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
