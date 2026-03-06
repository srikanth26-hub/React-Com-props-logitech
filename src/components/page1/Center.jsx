import React from 'react'
import Button from './Button'
import Cards from './Cards'

const Center = (props) => {
  return (
    <div className='flex w-full p-4'>
        <div className='w-1/3  flex flex-col '>
            <h1 className='text-5xl font-bold text-black-500'>Designed <br /> to <br /> Dominate</h1>
            <div className='text-lg mt-5 text-gray-600 pl-2'>
              Experience next-level performance with Logitech’s precision-engineered gear. Designed for gamers, creators, and professionals who demand speed, accuracy, and total control.      
            </div>
            <Button  />
        </div>
        <div id='right' className=' w-2/3 h-full flex gap-10 overflow-x-auto py-4 px-2'>
        {props.user.map(function(elem,idx){
          return <Cards key={idx} img={elem.img} tag1={elem.tag1} tag2={elem.tag2} />
        })}
        </div>
    </div>
  )
}

export default Center