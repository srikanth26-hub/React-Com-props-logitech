import React, { useState, useEffect } from 'react'
import Section1 from './components/page1/Section1'
import Section2 from './components/page2/Section2'
import Section3 from './components/page3/Section3'
import Section4 from './components/page5/Section4'
import Footer from './components/page4/Footer'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const user = [
    { img: "https://images.unsplash.com/photo-1722682811175-5df0b444d659?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag1: "Top Gaming Recommended", tag2: "Exclusive Product" },
    {
      img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1974&auto=format&fit=crop",
      tag1: "Top Gaming GPU",
      tag2: "G Series"
    },
    { img: "https://resource.logitech.com/w_342,ar_4:5,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/homepage/delorean-hp/cards/desktop-keys-to-go-2-side-view.jpg", tag1: "Top Recommended", tag2: "Selling Product" },
    {
      img: "https://resource.logitech.com/w_586,ar_4:5,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/homepage/delorean-hp/mx-ergo-s-secondary-tile.jpg",
      tag1: "Work in your comfort zone",
      tag2: "PRO Series"
    },
    {
      img: "https://resource.logitech.com/w_220,ar_4:5,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/homepage/delorean-hp/cards/person-holding-wireless-keyboard.jpg",
      tag1: "Start with a POP",
      tag2: "KEYS-TO-GO 2 is the perfect"
    },
    {
      img: "https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-100/brio-100-key-features-2.png",
      tag1: "Webcam",
      tag2: "Meet and stream in ultra 4K HD"
    },
    {
      img: "https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/drivingforce/2025/gallery/g29-playstation-ifestyle-gallery-3.png",
      tag1: "Driving Force Steering Wheels & Pedals",
      tag2: "G SeriesG920"
    },
    {
      img: "https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mobility/flip-folio/buy/gallery/lifestyle-gallery/flip-folio-13-compact-keyboard-graphite.jpg",
      tag1: "Flip Folio",
      tag2: "Detachable, multi-device keyboard"
    },
    {
      img: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=1974&auto=format&fit=crop",
      tag1: "Ergonomic",
      tag2: "Productivity Pro"
    },
    {
      img: "https://resource.logitech.com/w_1440,h_810,ar_16:9,c_fill,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/headsets/zone-vibe-100/zone-vibe-100-person-for-work.jpg",
      tag1: "Work. Play. Vibe.",
      tag2: "Slim & Stylish"
    }
  ]

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-transparent">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg"
          alt="Logitech Logo"
          className="h-16 w-auto animate-bounce"
        />
      </div>
    )
  }

  return (
    <>
      <Section1 user={user} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />  
    </>
  )
}

export default App