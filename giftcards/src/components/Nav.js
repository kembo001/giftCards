import React from 'react'
import '../components/Nav.css'
import logo from '../images/logo.jpeg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Nav() {
  return (
    <div className='header'>
        <img class='logoIMG' src={logo} alt=''/>
        <h2>Gifties</h2>
    <div className='headerNav'>

    
            <div className='headerOption'>
                <span className='header_optionLineTwo'>
                    Home
                </span>
            </div>
                
            <div className='headerOption'>
                <span className='header_optionLineTwo'>
                    Products
                </span>
            </div>

            <div className='headerOption'>
                <span className='header_optionLineTwo'>
                    About Us
                </span>
            </div>

            <div className='headerOption'>
                <span className='header_optionLineTwo'>
                    Contact
                </span>
            </div>
            </div>

            <div className='headerOption'>
            <span className='header_optionLineTwo header_OptionBasket'>
            <ShoppingBasketIcon /> 
            <span className='header_basketCount'>0</span>
                </span>
            </div>
       
    </div>
  )
}

export default Nav