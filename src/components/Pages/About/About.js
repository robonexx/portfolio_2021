import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import './About.css'
import Modal from '../../Modal/Modal';

 const Content = styled.div` 
 position: absolute;
 top: 8vh;
 left: 50%;
 transform: translate(-50%);
 width: 100%;
 height: 92vh;
 z-index: 5;
  `;

  const DevSection = styled.div`
    position: absolute;
    top: 30vh;
    left: 3vw;
  @media (max-width: 768px) {
  top: 15vh;
  left: 10vw;
  width: 24vw;
  margin-bottom: 6vh;
  }
  `
  const DancerSection = styled.div`
        position: absolute;
        bottom: 13vh;
        right: 32vw;
  @media (max-width: 768px) {
  bottom: 5vh;
  right: 20vw;
  width: 30vw;
}
  `
 const Title = styled.h2` 
    position: absolute;
    top: 3vh;
    left: 2;
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Baskervville', sans-serif;
    color: #fafafa;
    text-shadow: 3px 3px 5px black;
    padding: 0.5rem;
    z-index: 50;

    span {
        margin-left: 50px;
    }
    span:nth-child(3) {
        margin-left: 200px;
    }
    span:last-child {
        margin-left: 450px;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        
    }
  `;
 const Developer = styled.h2` 
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    text-shadow: 2px 2px black;    

    @media (max-width: 768px) {
        font-size: 3rem;
        writing-mode: vertical-lr;
    }
  `;
 const Dancer = styled.h2` 
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    text-shadow: 2px 2px black;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        writing-mode: vertical-rl;
    }
  `;
  const Button = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  background: ${({ theme }) => theme.btnBg};
  color: #fafafa;
  filter: drop-shadow(2px 2px rgba(255,255,255,0.3));
  outline: none;
  cursor: pointer;

  &:hover,
      &:focus {
        background: ${({ theme }) => theme.btnHover};
        transform: scale(0.98);
        box-shadow: 0px 2px 3px rgba(0,0,0,0.4)         
      }
  `
 /* const TextP = styled.p` 
    font-size: 22px;
    color: #fafafa;
    text-shadow: ${({ theme }) => theme.textShadow};
    background: linear-gradient(120deg, #111, transparent);
    padding: 0.2rem;
    @media (max-width: 768px) {
        font-size: 0.7rem;
    `; */

const About = () => {

    const [showModal, setShowModal ] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const fade = useSpring({from: {opacity: 0}, opacity: 1});    
    const fadeIn = useSpring({from: {transform: 'translateY(-500px)', opacity: 0}, transform: 'translateY(0)', opacity: 1});        
    const fadeInA = useSpring({from: {transform: 'translateX(-800px)', opacity: 0}, transform: 'translateX(0)', opacity: 1});    

return ( 
    <animated.div className="about" style={fade}>

        <div className="container">
        <div className="no-img"></div>
        <div className="img"></div>
        <div className="no-img"></div>
        <div className="no-img"></div>
        <div className="no-img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="no-img"></div>
        <div className="img"></div>
        <div className="no-img"></div>
        <div className="no-img"></div>
        <div className="img"></div>
</div>
{showModal && <Modal className="modal" showModal={showModal} setShowModal={setShowModal}/>}
                <animated.div style={fadeIn}>
                    <Title><span>Robert</span><br/><span>"Rob One"</span><br/><span>Wägar</span></Title>
                </animated.div>
        <Content>
                {/* <DevSection>
                    <animated.div style={fadeInA}>
                        <Button onClick={openModal} >
                    <Developer>Developer</Developer>
                    </Button>
                </animated.div>
            </DevSection> */}
                
            {/* <DancerSection>  
                <animated.div style={fadeInA}>
                    <Button>
                <Dancer>Dancer</Dancer>
                </Button>
                </animated.div>
                </DancerSection> */}
                
        </Content>
        
            </animated.div>
        
        
     );
}
 
export default About;