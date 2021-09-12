import React from 'react'
import './Header.scss'
/* import styled from 'styled-components'
import Navbar from '../Nav/Navbar' */
import Nav2 from '../Navbar/Navbar.js'
/* import MenuBtn from '../Nav/MenuBtn' */
import { useMediaQuery } from 'react-responsive'
import Logo from './Logo'

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width : 768px)'
    })

    return ( 
        <div className="header-wrapper">
            <Nav2 />
        {/*  {isDesktopOrLaptop && <Nav2 />}
         {isMobileOrTablet && <MenuBtn />} */}
        </div>
     );
}
 
export default Header;