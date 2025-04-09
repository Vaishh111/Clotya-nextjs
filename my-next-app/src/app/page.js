import React from 'react'
import Shipping from './components/Shipping'
import Photogrid from './components/Photogrid'
import Bestseller from './components/Bestseller'
import Countdown from './components/Countdown'
import Newseason from './components/Newseason'
import BestCategory from './components/Bestcategory'
import Lastdeals from './components/Lastdeals'
import Email from './components/Email'
import Footer from './components/Footer'
import News from './components/News'
import Reviews from './components/Reviews'


const page = () => {
  return (
    <>
    <Shipping/>
    <Photogrid/>
    <Bestseller/>
    <Countdown/>
    <Bestseller/>
    <Newseason/>
   
    <BestCategory/>
    <Lastdeals/>
      <Reviews/>
    <News/>
  
    
    <Email/>
    <Footer/>
  
   
    
      
    </>
  )
}

export default page
