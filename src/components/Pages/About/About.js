import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.scss'

const About = () => {


return ( 
    <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1}}
       exit={{ opacity: 0}}
       transition={{ duration: 0.2, delayChildren: 0.2 }}
        className="about">
        
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
        <div className="about-content">
        </div>
        </motion.div>
        
        
     );
}
 
export default About;

