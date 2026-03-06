import React from 'react'

const Cards = (props) => {
  return (
    <div >
        <div className='relative overflow-hidden w-80 h-full rounded-lg shadow-lg flex  shadow-indigo-400'>
            <img className='w-full  h-full object-cover' src={props.img} alt="" />
            <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{props.tag1}</h2>
                <p className="text-sm">{props.tag2}</p>
            </div>
        </div>
    </div>
    
  )
}

export default Cards