import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import User from './component/user'
import Post from './component/Post'
import Pagination from './component/Pagination'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(()=>{
    const fetchPost = async () =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPost();
  }, []);

  //get currentPost
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="container mt-5">
        <h1 className=' text-xl mb-3 font-bold text-blue-700'>My Blog</h1>
        <Post posts={currentPosts} loading={loading}/>
        <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
      </div>
    </>
  )
}

export default App
