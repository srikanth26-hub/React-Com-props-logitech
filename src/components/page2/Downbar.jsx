import React, { useState } from 'react'

const Downbar = () => {
  const [num, setNum] = useState(0);
  const [denum, setDenum] = useState(0);
  function increment() {
    setNum(num + 1);
  }
  function decrement() {
    setNum(num - 1);
  }
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <h1>Count: {num}</h1>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increment}>Increment</button>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Downbar