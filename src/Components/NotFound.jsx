import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to='/'>back to homepage</Link>
    </div>
  )
}
