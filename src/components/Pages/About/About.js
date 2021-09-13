import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import './About.scss'
import Modal from '../../Modal/Modal';

const About = () => {

    const [showModal, setShowModal ] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const fade = useSpring({from: {opacity: 0}, opacity: 1});    
    const fadeIn = useSpring({from: {transform: 'translateY(-500px)', opacity: 0}, transform: 'translateY(0)', opacity: 1});        
    const fadeInA = useSpring({from: {transform: 'translateX(-800px)', opacity: 0}, transform: 'translateX(0)', opacity: 1});    

return ( 
    /*  <animated.div className="about" style={fade}> */
    <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1}}
       exit={{ opacity: 0}}
       transition={{ duration: 0.2, delayChildren: 0.2 }}
        className="about">
        
        {showModal && <Modal className="modal" showModal={showModal} setShowModal={setShowModal} />}
        <motion.div className="about-wrapper-top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1}}
          exit={{ scaleX: 0}}
          transition={{ duration: 0.3, delay: 0.2 }}
          >
       
        <div className="about-choice-img"></div>
        <div className="heading">
                <h3 className="name">Robert Wägar</h3>
               
                <span className="developer"/*  onClick={openModal} */>
                <Link to="/developer">
                  Developer
                </Link>
                </span>
                <span className="dancer">
                <Link to="/dancer">
                  Dancer
                </Link>
                </span>
              
                        </div>
                        </motion.div>


               {/*  <animated.div style={fadeIn}>
                    <h1 className="about-title"><span>Robert</span><br/><span>"Rob One"</span><br/><span>Wägar</span></h1>
                </animated.div> */}
        
                  {/*  <div className="about-wrapper">
                    <div className="photo">
                <div className="about-img"></div>
                    </div>
                    <div className="details">
                        <div className="heading">
                    <h3 className="name">Robert Wägar</h3>
                    <span className="developer" >Developer </span><i>/</i><span className="dancer"> Dancer</span>
                        </div>
                        <div className="text fadeInUp animated">Hello, I'm Rob from Sweden. I'm a web developer with a passion for creative solutions. 
                            I've been working as dancer all my life so I'm used to work with creativity and also I've been teaching so helping others is close to my heart. <br/> I'm still learning and developing my skills on coding and designing.</div>
                    </div>
                        
                </div> */}
        
        <div className="about-content">
        </div>
        
        </motion.div>
           /*  </animated.div> */
        
        
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
                