import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold mb-4'>404</h1>
            <p className='text-xl text-gray-600 mb-4'>Oops! page not found</p>
            <Link to={"/"} className='text-blue-500 hover:text-blue-700 underline'>Return to home</Link>
        </div>

    </div>
  )
}

export default NotFound