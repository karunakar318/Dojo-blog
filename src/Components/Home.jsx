import React, { useDebugValue, useEffect, useState } from 'react'
import Bloglist from './Bloglist'
import useFetch from '../hooks/useFetch'
const Home = () => {
    const {data,ispending,error}=useFetch("http://localhost:8000/blogs");
    
    
  return (
    <div className="home">
        {error && <div>{error}</div>}
        {ispending && <div>loading</div>}
        
       {data && <Bloglist blogs={data} />}
    </div>
  )
}

export default Home