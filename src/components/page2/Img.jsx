import React from 'react'

const Img = (Props) => {
  return (
    <div className='flex overflow-hidden shrink-0 justify-around relative shadow-lg'>
        <img className="w-96 h-96 object-cover p-10 rounded-full" src={Props.img} alt="" />
        <div className='absolute bottom-3'>
            <h4 className='font-mono font-bold'>{Props.tag}</h4>
        </div>
    </div>
  )
}

export default Img