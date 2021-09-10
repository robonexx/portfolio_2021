import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import './About.scss'
import Modal from '../../Modal/Modal';
import AboutImg from '../../../img/ruperto.jpg'
import { Github } from '@styled-icons/feather/Github'
import { Linkedin } from '@styled-icons/feather/Linkedin'
import { Facebook } from '@styled-icons/feather/Facebook'
import {Instagram } from '@styled-icons/feather/Instagram'


 
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

{showModal && <Modal className="modal" showModal={showModal} setShowModal={setShowModal}/>}
               {/*  <animated.div style={fadeIn}>
                    <h1 className="about-title"><span>Robert</span><br/><span>"Rob One"</span><br/><span>Wägar</span></h1>
                </animated.div> */}
                   <div className="about-wrapper">
                    <div className="photo">
                {/* <img src={AboutImg} alt="" /> */}
                <div className="about-img"></div>
                    </div>
                    <div className="details">
                        <p className="heading">
                    <h3 className="name">Robert Wägar</h3>
                    <span className="developer">Developer </span><i>/</i><span className="dancer"> Dancer</span>
                        </p>
                        <p className="text fadeInUp animated">Hello, I'm Rob from Sweden. I'm a web developer with a passion for creative solutions. 
                            I've been working as dancer all my life so I'm used to work with creativity and also I've been teaching so helping others is close to my heart. <br/> I'm still learning and developing my skills on coding and designing.</p>
                    </div>
                        <div className="social">
                             <a href="https://github.com/robonexx" target="_blank"><Github className="soc-item soc-icon"/></a>
                           <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="_blank"> <Linkedin className="soc-item soc-icon"/></a>
                           <a href="https://facebook.com/robert.r.wagar" target="_blank"> < Facebook className="soc-item soc-icon"/></a>
                            <a href="https://www.instagram.com/r.o.b_o.n.e/" target="_blank">< Instagram className="soc-item soc-icon"/></a>
                        </div>
                </div>
        <div className="about-content">
        </div>
        
            </animated.div>
        
        
     );
}
 
export default About;


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
                