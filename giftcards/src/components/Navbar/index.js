import React from 'react'
import './NewNav.css'
import {Nav, NavbarContainer, NavLogo, MoibleIcon, NavMenu, NavItem, NavLinks} from './NewNav'
import {FaBars} from 'react-icons/fa'
import logo from './images/logo.jpeg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function index() {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Gifties<img class='logoIMG' src={logo} alt=''/></NavLogo>
                
                <MoibleIcon>
                  <FaBars />
                </MoibleIcon>

                <NavMenu>
                  <NavItem>
                    <NavLinks to='home'>Home</NavLinks>
                  </NavItem>
                   <NavItem>
                    <NavLinks to='products'>Products</NavLinks>
                  </NavItem>
                   <NavItem>
                    <NavLinks to='aboutUs'>About Us</NavLinks>
                  </NavItem>
                   <NavItem>
                    <NavLinks to='contact'>Contact</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks className='cartLogo' to='checkout'>Cart [0]</NavLinks>
                  </NavItem>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default index