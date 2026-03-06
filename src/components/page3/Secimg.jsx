import React from 'react'
const Secimg = () => {
  return (
    <div className="w-full h-screen relative">
  <img
    className="w-full h-full object-cover "
    src="https://res.cloudinary.com/dppv0axqc/image/upload/v1772038944/ChatGPT_Image_Feb_25_2026_10_31_32_PM_ne16l1.png"
    alt="Logitech Gaming"
  />

  <div className="">
    <h1 className='absolute bottom-80 left-6 text-black font-bold leading-tight text-6xl'>Experience the <br />Future <br />of <br /></h1>
    <h1 className="text-black text-6xl font-bold leading-tight absolute bottom-30 right-10">
      Gaming <br />
      with <br />

      <button
  className="
    relative  rounded-xl
    bg-linear-to-br from-white/20 to-white/5
    backdrop-blur-lg
    border border-white/30
    text-black font-semibold
    transition-all duration-500
    hover:from-white/30 hover:to-white/10
    hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
    hover:scale-105
  "
>
  Logitech G
</button>
    </h1>
  </div>
</div>


  )
}

export default Secimg