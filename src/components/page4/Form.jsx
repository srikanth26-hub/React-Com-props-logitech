import React, { useState } from 'react'

const Form = () => {
    // const data = [{
    //     name: "John Doe",
    //     hall: "Hall A"
    // }]
    const [tittle, setTittle] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = (elem) =>{
        elem.preventDefault()
        console.log(tittle, description)
        

    }
  return (
    <div className='h-screen'>
        <form onSubmit={(elem) => {handleSubmit(elem)}} className='p-10 bg-gray-650 flex flex-col items-start w-fit rounded-2xl gap-4 bg-gray-600 m-10'>
            <div className='flex items-center gap-4'> 
                <h1 className='text-white text-bold'>User Profile </h1>
                <img className='h-10 w-10 rounded-full' src="https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <input x onChange={(elem) => setTittle(elem.target.value)} value={tittle} className='bg-gray-400 h-10  p-2 rounded-md ' type="text" placeholder='Enter Name' />
            <input onChange={(elem) => setDescription(elem.target.value)} value={description} className='bg-gray-400 h-10 w-fit p-2 rounded-md' type="text" placeholder='Hall Number' />
            <button className=' bg-blue-300 px-4 py-2 rounded-md' type='submits'>Submit</button>
        </form>

        {/* <div className='carddetails p-10 bg-gray-650 flex flex-col items-start w-fit rounded-2xl gap-4 bg-gray-300 m-10'>
            <h2 className='text-black'>Submitted Data:</h2>
            {data.map(function(elem, index){
                return <div key={index} className='bg-gray-400 p-4 rounded-md w-full'>
                    <h1 className='text-black'>Name: {elem.name}</h1>
                    <h1 className='text-black'>Hall: {elem.hall}</h1>
                </div>
            })}
        </div> */}
        <p>{tittle  }</p>
    </div>
  )
}

export default Form