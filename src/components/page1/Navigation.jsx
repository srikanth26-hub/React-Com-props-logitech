import React from 'react'

const Navigation = () => {
  return (
    <div className='flex space-x-4 '>
        <h4 className='text-black font-extrabold'><a href="/">Home</a></h4>
        <h4 className='text-black font-extrabold'><a href="/products">Products</a></h4>
        <h4 className='text-black font-extrabold'><a href="/about">About</a></h4>
        <h4 className='text-black font-extrabold'><a href="/contact">Contact</a></h4>
    </div>
  )
}

export default Navigation