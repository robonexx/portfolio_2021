import './Contact.scss'
import typing from '../../../components/video/typing.mp4';
import { Github } from '@styled-icons/feather/Github'
import { Linkedin } from '@styled-icons/feather/Linkedin'
import { Facebook } from '@styled-icons/feather/Facebook'
import { Instagram } from '@styled-icons/feather/Instagram'


const Contact = () => {

   
    return ( 

        <div className="contact">
            <div className="contact-container">
                <h1>Contact Me:</h1>
                    <h3>robertwagar@gmail.com</h3>
                    <h3>tel: +46(0)72-310 32 33</h3>

            <video className="video" autoPlay loop muted
            
            >
                <source src={typing} type="video/mp4"/>
            </video> 
           {/*  <div className="social">
                             <a href="https://github.com/robonexx" target="_blank"><Github className="soc-item soc-icon"/></a>
                           <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="_blank"> <Linkedin className="soc-item soc-icon"/></a>
                           <a href="https://facebook.com/robert.r.wagar" target="_blank"> < Facebook className="soc-item soc-icon"/></a>
                            <a href="https://www.instagram.com/r.o.b_o.n.e/" target="_blank">< Instagram className="soc-item soc-icon"/></a>
                        </div> */}
            </div>
            </div>
        
        
     );
}
 
export default Contact;