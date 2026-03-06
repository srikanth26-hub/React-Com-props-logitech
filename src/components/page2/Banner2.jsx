import React from 'react'
import Img from './img'

const Banner2 = () => {
    const data = [{
        img :"https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mobility/flip-folio/buy/gallery/lifestyle-gallery/person-walking-with-flip-folio-11-keyboard-graphite.jpg",
        tag :"Front and back protection",
    },{
        img :"https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mobility/flip-folio/buy/gallery/lifestyle-gallery/flip-folio-13-compact-keyboard-graphite.jpg",
        tag :"Compact design",
    },{
        img :"https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mobility/flip-folio/buy/gallery/lifestyle-gallery/person-sitting-in-beach-with-flip-folio-13-keyboard-graphite.jpg",
        tag :"Portable and lightweight",
    },{
        img :"https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mobility/flip-folio/buy/person-typing-flip-folio-graphite-with-multi-devices.jpg",
        tag :"Multi-device connectivity",
    },{
        img :"https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mobility/flip-folio/buy/person-using-flip-folio-in-a-garden.jpg",
        tag :"Flexible setup",
    }]
  return (
    <div id="banner2scr" className='flex justify-around mt-10 overflow-x-auto'>
        {data.map((item, index) => (
            <Img key={index} img={item.img} tag={item.tag} />
        ))}
    </div>
  )
}

export default Banner2