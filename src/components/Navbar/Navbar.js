import React, { useState } from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import Logo from '../Header/Logo'
/* import BurgerMenu from './BurgerMenu' */
import styled from 'styled-components'
import { Menu } from '@styled-icons/feather/Menu'
import { Close } from '@styled-icons/evil/Close'

// used styled icons / styled components just for the icons
// I prefer styled components but wanted to use scss on this site

const MenuBtn = styled(Menu)`
    color: #f4f4f8;
    width: 32px;
    height: 32px;
  `;
  
const CloseBtn = styled(Close)`
    color: #f4f4f8;
    width:32;
    height: 32px;
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo" style={{textDecoration: "none"}}>
                   <Logo/>
                </Link>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseBtn /> : <MenuBtn/>}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links"
                            onClick={() => setIsOpen(false)}>
                            Home
                            <small>where we live...</small>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links"
                            onClick={() => setIsOpen(false)}>
                            About
                            <small>Me, MySelf and I</small>
                        </Link>
                    </li>
                    <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                        <Link to="/projects" className="nav-links"
                            onClick={() => setIsOpen(false)}>
                            Projects
                            <small>What I've been up to</small>
                            {dropdown && <Dropdown/>}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links"
                            onClick={() => setIsOpen(false)}>
                            Contact
                            <small>Where you can find me</small>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default Navbar;

/* 
<ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <BurgerMenu isOpen={isOpen} /> 
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                </ul>
 */

