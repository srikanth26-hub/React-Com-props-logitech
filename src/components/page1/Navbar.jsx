import React from 'react'
import Logo from './logo'
import Navigation from './navigation'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between pl-4 pr-4'>
        <Logo />
        <Navigation />
    </div>    
  )
}

export default Navbar