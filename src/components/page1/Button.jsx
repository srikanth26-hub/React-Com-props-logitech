import React, { useState } from 'react'



const Button = () => {
  const [para, setpara] = useState("");
  function addPara(){
    setpara(<p className="text-2xl mt-2 pl-10 text-red-500 text-extrabol">Oops! Nothing here yet 👀<br/>We're working on adding amazing collections. Stay tuned!</p>)
  }
  return (
    <div className='p-4'>
        <button  className='bg-black text-white w-fit px-4 py-2 rounded-full cursor-pointer' onClick={addPara} >Explore the Collection<i className="ri-shopping-bag-4-line text-white ml-2"></i></button>
        {para}
    </div>
  )
}

export default Button