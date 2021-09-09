import React from 'react'
import styled from 'styled-components'
import Navbar from '../Nav/Navbar'
import MenuBtn from '../Nav/MenuBtn'
import { useMediaQuery } from 'react-responsive'
import Logo from './Logo'

const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 8vh;
    align-items: center;
    background: #1f2833;
    z-index: 99;
    padding: 0.25rem;

    `;

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width : 768px)'
    })

    return ( 
        <Content>
            <Logo />
         {isDesktopOrLaptop && <Navbar />}
         {isMobileOrTablet && <MenuBtn />}
        </Content>
     );
}
 
export default Header;