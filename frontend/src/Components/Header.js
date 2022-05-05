import React, { useEffect, useState } from 'react'
import axios from "axios"

const Header = () => {
  let [val,setVal] = useState(0);
  const [posts, setPosts] = useState([]);
  let valHandler = () =>{
    setVal((previousVal) => previousVal + 1);
  }

  useEffect(()=>{
    document.title = `Clicked ${val}`
  })

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <div>
      {val}
      <button onClick={valHandler}>Click</button>
      <ol>
      {posts.map(post=>(
        <li key={post.id}>{post.title}</li>
        ))}</ol>
     
    </div>
  )
}

export default Header
