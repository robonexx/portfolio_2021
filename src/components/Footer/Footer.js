import React from 'react'
import './Footer.scss'
import { Github } from '@styled-icons/feather/Github'
import { Linkedin } from '@styled-icons/feather/Linkedin'
import { Facebook } from '@styled-icons/feather/Facebook'
import { Instagram } from '@styled-icons/feather/Instagram'

const Footer = () => {

    return (
        <div className="footer">
            <div className="contact-info">
                <h2>Contact: robertwagar@gmail.com</h2>
            </div>
            <div className="social">
                             <a href="https://github.com/robonexx" target="_blank"><Github className="soc-item soc-icon"/></a>
                           <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="_blank"> <Linkedin className="soc-item soc-icon"/></a>
                           <a href="https://facebook.com/robert.r.wagar" target="_blank"> < Facebook className="soc-item soc-icon"/></a>
                            <a href="https://www.instagram.com/r.o.b_o.n.e/" target="_blank">< Instagram className="soc-item soc-icon"/></a>
                        </div>

        </div>
     );
}
 
export default Footer;