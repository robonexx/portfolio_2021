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
 border-radius: 10px;
 color: #fafafa;
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
    top: 12vh;
    right: 3vw;
    font-size: 3rem;
    color: #fafafa;
    text-shadow: 3px 3px 5px black;
    border-top-left-radius: 20px;
    padding: 0.5rem;
    background: linear-gradient(120deg, black, transparent 80%);
    z-index: 50;

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
    
  `;
 const Dancer = styled.h2` 
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    text-shadow: 2px 2px black;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        writing-mode: vertical-rl;
    
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
                    <Title>Robert "Rob-One" Wägar</Title>
                </animated.div>
        <Content>
                <DevSection>
                    <animated.div style={fadeInA}>
                        <Button onClick={openModal} >
                    <Developer>Developer</Developer>
                    </Button>
                    </animated.div>
               {/*  <TextP>
                    I'm junior developer studying at KYH front-end developer education and I will graduate 2021. So far I have managed to get a wider knowledge in HTML, CSS, JS, REACT, FIGMA. Learning more and more each day that goes by.
                </TextP> */}
                

            </DevSection>
                
            <DancerSection>  
                <animated.div style={fadeInA}>
                    <Button>
                <Dancer>Dancer</Dancer>
                </Button>
                </animated.div>
                    {/* <TextP>
                        As a dancer I been working for quite some time. I have danced since I was 8 years old and been working professionaly with dance since 1991.
                        I been teaching dance at many schools around sweden and Stockholm where I´m based. Still teaching at Danscenter/ Fryshuset, House of Shapes and Haninge Dansstudio. 
                    </TextP> */}
                </DancerSection>
                
            </Content>
            </animated.div>
        
        
     );
}
 
export default About;