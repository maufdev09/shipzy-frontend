import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function CommonLayOut({children}: {children: React.ReactNode}) {
  return (
    <div  className=' flex  mx-auto flex-col  min-h-screen' >
        <Navbar/>
     <div className=' flex-grow '>
       {children}
     </div>
     <Footer/>
    </div>
  )
}
