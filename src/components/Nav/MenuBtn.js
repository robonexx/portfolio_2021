import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import { AiOutlineClose } from 'react-icons/ai'
import { VscMenu } from 'react-icons/vsc'



const openBtn = <VscMenu />
const closeBtn = <AiOutlineClose />


const Btn = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  color: #fafafa;
  
  .open {
      position: relative;
      font-size: 1.5rem;
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transform: ${({isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      transition: transform 0.5s ease, opacity 0.3s ease;

      ::before, ::after {
      content: '';
    width: inherit;
    height: inherit;
    position: absolute;
    background: inherit
  }
  
  ::before {
    bottom: 12px
  }
  
  ::after {
    bottom: 6px
  }
  }
  

  .close {
    position: absolute;
    font-size: 1.5rem;
    transition: transform 0.5s ease, opacity 0.4s ease;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: ${({isOpen }) => (!isOpen ? "rotate(-45deg)" : "rotate(0)")};

  }
`;

const MenuBtn = () =>{
  const [isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <Btn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div className="open">{openBtn}</div>
        <div className="close">{closeBtn}</div>
      </Btn>
      <HamburgerMenu isOpen={isOpen} />
    </>
  );
}

export default MenuBtn;
