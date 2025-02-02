import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Bloglist = ({blogs}) => {
    
  return (
    
    <div className="blog-list">
        <h2>All Blogs</h2>
        {blogs.map((blog)=>{
            return <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                </Link>
            </div>
        })}
    </div>
  )
}

export default Bloglist