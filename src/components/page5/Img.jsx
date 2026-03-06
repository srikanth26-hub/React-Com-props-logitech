import React from 'react'

const Img = () => {
  return (
    <div className='flex space-around gap-10 px-10 py-10'>
        <div className='object-cover pt-20'>
            <img className=' w-89 h-110' src="https://resource.logitechg.com/w_464,h_619,ar_3:4,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/ghub-update/2025/mixline.jpg" alt="" />
             <h2 className=' font-extrabold pt-2 pb-2'  >MIXLINE</h2>
            <p className='text-sm '>Mixline makes the process of audio routing, mixing, and streaming easier and less painful—so you can spend less energy in the mix and more where it matters.</p>
        </div>
        <div className='object-cover'>
            <img className=' w-89 h-110' src="https://resource.logitechg.com/w_464,h_619,ar_3:4,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/ghub-update/2025/streamlabs.jpg" alt="" />
             <h2 className=' font-extrabold pt-2 pb-2'  >STREAMLABS</h2>
            <p className='text-sm'>All-in-one suite for live streamers. Simple tools to go live to popular platforms, engage with viewers, design your stream, and grow.</p>
        </div>
        <div className='object-cover pt-20'>
            <img className=' w-89 h-110' src="https://resource.logitechg.com/w_464,h_619,ar_3:4,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/ghub-update/2025/astro-series-software.jpg" alt="" />
             <h2 className=' font-extrabold pt-2 pb-2'  >ASTRO SERIES SOFTWARE</h2>
            <p className='text-sm'>Astro Command Center software enables full configuration of the adjustable settings for older generations of Astro Series headsets.</p>
        </div>
    </div>
  )
}

export default Img