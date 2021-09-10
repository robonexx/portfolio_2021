import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Nav = styled.div`
position: fixed;
margin: 0;
top: 0;
left: 0;
width: 100vw;
height: 8vh;
z-index: 100;
overflow: hidden;

`;
const NavStyle = styled.div`
     position: absolute;
    top: 0rem;
    right: 2rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding-block: 1rem;

    li {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        
        grid-gap: 1.2rem;
       padding: 0.5rem;
        

        &::after {
            border-right: solid 15px transparent;
             border-left: solid  15px #fafafa;
            border-top: solid transparent 15px;
            border-bottom: solid transparent 15px;
            transform: translateX(-70%) translateY(-10%);
            position: absolute;
            z-index: -1;
            content: "";
            display: block;
           
    }
    
    a {
        font-size: 1.4rem;
        font-family: 'Ubuntu', sans-serif;
        text-decoration: none;
        line-height: 1;
        color: #fafafa;
        
        small {
            font-size: .5rem;
            display: block;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-weight: 200;
            text-align: right;
            color: #fff;
        }
    }

    &:hover,
        &:focus {
        a {
    text-shadow: -2px -1px 0px rgba(0,0,0,0.32);
    color: #ff6b46;
        }
        small {
            color: rgba(180,180,180);
        }
        &::after {
            border-left: solid 15px orange;
        }
}
    }
`;


const Navbar = () => {   

    return (
        <Nav> 
            <NavStyle>
                <li>
                <Link to="/">
                        Home
                        <small>where we sleep... Zzz</small>
                </Link>
                </li>
                <li>
                <Link to="/about">
                        About
                        <small>Me, MySelf and I</small>
                </Link>
                </li>
                <li>
                <Link to="/projects">
                        Projects
                        <small>What I've been up to</small>
                </Link>
                </li>
                {/* <li>
                <Link to="/developer">
                        Developer
                        <small>My journey so far</small>
                </Link>
                </li>
                <li>
                <Link to="/dancer">
                        Dancer
                        <small>Skills that payed my bills</small>
                </Link>
                </li> */}
                <li>
                <Link to="/contact">
                        Contact
                        <small>Where you can find me</small>
                </Link>
                </li>
            </NavStyle>
                
         </Nav>
     );
}
 
export default Navbar;

/* 
 color: ${({ theme }) => theme.btnColor};
        background: ${({ theme }) => theme.btnBg};
        text-transform: uppercase;
        margin-left: 3vw;
        padding: 0.2rem 0.1rem;
        border: 2px solid ${({ theme }) => theme.btnBg};
        align-items: center;
        text-align: center;
        vertical-align: middle;
        outline: 1px solid #fafafa;
        outline-offset: 2px;
        opacity: 0.7;
        transition: outline-offset 0.3s ease;
        font-size: 1.4rem;
        font-family: 'Ubuntu', sans-serif;
        text-decoration: none;
        line-height: 1;
        color: #fafafa; */