import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.90);
  position: fixed;
  transform: ${({isOpen }) => (isOpen ? "translateX(60%) translateY(-2%)" : "translateX(100%) translateY(-100%)")};
  margin: 0;
  top: -25%;
  right: 5%;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  text-align: center;
  transition: transform 0.6s ease;
  z-index: 10;

  div {
    position: absolute;
    left: 20px;
    bottom: 40px;
    display: flex;
    flex-direction: column;
  }

  a {
  width: 4.4rem;
  margin-bottom: 20px;
  text-decoration: none;
  color: white;
  position: relative;
  height: 24px;
  font-size: 12px;
  color: #fafafa;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 6px;
  align-items: center;
  text-align: center;
  outline: 1px solid #fafafa;
  outline-offset: 2px;
  transform: ${({isOpen }) => (isOpen ? "rotate(10deg) translateX(20%)" : "rotate(-30deg)")};
  transition: outline-offset 0.4s ease, transform 0.8s ease-in-out;
}

a:nth-of-type(4n+1) {
  background: #0a6c74;
  border: 1px solid #0A6C74;
  transition-delay: 0.3s;  
}
a:nth-of-type(4n+2) {
  background: #0E7C86;
  border: 1px solid #0E7C86;
  margin-left: 2rem;
  transition-delay: 0.6s;
}
a:nth-of-type(4n+3) {
  background: #14919B;
  border: 1px solid  #14919B;
  margin-left: 4rem;
  transition-delay: 0.9s;
}
a:nth-of-type(4n+4) {
  background: #2CB1BC;
  border: 1px solid #2CB1BC;
  margin-left: 6rem;
  transition-delay: 0.12s;
}

a:hover,
a:focus {
  outline-offset: -3px;
  outline-width: 1px;
}
`;

function HamburgerMenu({ isOpen }) {


  return (

    <Ul isOpen={isOpen}  >
                <div className="Ul_li">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                </div>
    </Ul>
  );
}

export default HamburgerMenu;
