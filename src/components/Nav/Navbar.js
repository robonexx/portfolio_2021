import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavStyle = styled.div`
    font-family: 'Exo 2';
    font-weight: 200;
    position: fixed;
    top: 3vh;
    right: 2vw;
    margin-right: 2vw;
    z-index: 20;
    opacity: 1;
    text-transform: uppercase;
    font-size: 16px;
    display: flex;
    justify-content: space-between;

     a {
        width: 5rem;
        text-decoration: none;
        color: white;
        position: relative;
        height: 26px;
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.btnColor};
        letter-spacing: 1px;
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
      }
      
      a:hover,
      a:focus {
        outline-offset: -3px;
        outline-width: 1px;
      }
      

`;


const Navbar = () => {   


    return (
        <nav> 
            <NavStyle>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </NavStyle>
                
         </nav>
     );
}
 
export default Navbar;