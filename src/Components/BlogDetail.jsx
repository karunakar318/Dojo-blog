import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from '../hooks/useFetch';

export const BlogDetail = () => {
    const {id}=useParams();
    const {data:blog,error,ispending}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory()
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
  return (
    <div className='blog-details'>
        {ispending && <div>loading</div>}
        {error && <div>{error+"hello"}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>delete</button>
            </article>
        )}
    </div>
  )
}
