import React from 'react'

function Post({posts,loading}) {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post=>(
        <li key={post.id} className='list-group-item border-2 border-gray-300'>
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Post