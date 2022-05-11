import React from 'react'
import "./Home.css"
import HomeLogo from '../images/homeLogo.jpeg'
import Product from './Product'

function Home() {
  return (
    <div className='homeContainer'>
        <div>
            <img className='homeImage' src={HomeLogo} alt=''/>
            <h1 className='homeIntro'>Welcome to Ngom Gifties!</h1>
        </div>
       
            {/* <Product /> */}
        
    </div>
  )
}

export default Home