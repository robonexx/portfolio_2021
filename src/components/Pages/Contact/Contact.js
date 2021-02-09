import styled from 'styled-components'
import { FaGithubAlt, FaInstagram, FaLinkedin, FaCodepen, FaFacebookSquare, FaRegEnvelope } from 'react-icons/fa'
/* import { useSpring, animated } from 'react-spring' */
import typing from '../../../components/video/typing.mp4';

const BgContact = styled.div`
background: ${({ theme }) => theme.body};
width: 100vw;
height: 100vh;
background-position: center center;
background-size: cover;
object-fit: fixed;
z-index: -1;
`;

const Container = styled.div`
position: absolute;
top: 20vh;
left: 50%;
transform: translate(-50%);
width: 80%;
height: 74vh;
padding: 2vh 1vw;
display: flex;
flex-direction: column;
text-align: center;
border-radius: 10px;
background-color: rgba(0,0,0,0.5);
color:  ${({ theme }) => theme.text};
box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.5);
z-index: 2;

h1 {
   position: relative;
   font-family: 'Abril Fatface', cursive;
   letter-spacing: 3px;
   text-transform: uppercase;
   text-shadow: 3px 3px 2px rgba(0,0,0,0.6);
   margin-bottom: 1em;
}
div {
   display: flex;
   flex-direction: row;
}
h3 {
   font-family: 'Abril Fatface', cursive;
   letter-spacing: 3px;
   text-shadow: 3px 3px 2px rgba(0,0,0,0.6);
   background: linear-gradient(120deg, transparent, black, transparent);
   padding: 2px 4px;
   margin-bottom: 1em;
}

div {
    margin-top: 8em;
    display: flex;
    flex-flow: row wrap;
    align-item: center;
    padding: 0.2rem 4rem;

    @media (max-width: 768px) {
        margin-top: 6vh;
        padding: 0.2rem 1rem;
        }
}
`;

const Icon = styled.span`
position: relative;
margin: auto;
z-index: 5;

a { text-decoration: none;
   color:  ${({ theme }) => theme.text};
   filter: drop-shadow(2px 2px rgba(0,0,0,0.4));
   font-size 5rem;
   
   @media (max-width: 768px) {
   font-size: 2rem;
   padding: 0.3rem;
   margin: 1rem;
   }
}

 a:hover,
 a:focus {
   transform: scale(.9)
 }

`;



const Contact = () => {

   
    return ( 

        <BgContact>
            <Container>
                <h1>Contact</h1>
                    <h3>robertwagar@gmail.com</h3>
                    <h3>tel: +46(0)72-310 32 33</h3>

            <video autoPlay loop muted
            style={{
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: "-1",
                opacity: "0.7",
                
            }}
            >
                <source src={typing} type="video/mp4"/>
            </video> 
                <div>
                <Icon>
                    <p>GitHub</p>
                    <a href="https://github.com/robonexx" rel="noreferrer noopener" target="_blank"><FaGithubAlt/></a>
                </Icon>
                <Icon>
                    <p>LinkedIn</p>
                    <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" rel="noreferrer noopener" target="_blank"><FaLinkedin/></a>
                </Icon>
                <Icon>
                    <p>CodePen</p>
                    <a href="https://codepen.io/robonexx" rel="noreferrer noopener" target="_blank"><FaCodepen/></a>
                </Icon>
                <Icon>
                    <p>E-mail</p>
                    <a href="mailto:robertwagar@gmail.com" rel="noreferrer noopener" target="_blank"><FaRegEnvelope/></a>
                </Icon>
                <Icon>
                    <p>Insta</p>
                    <a href="https://www.instagram.com/r0b_0ne_/" rel="noreferrer noopener" target="_blank"><FaInstagram/></a>
                </Icon>
                <Icon>
                    <p>Facebook</p>
                    <a href="https://www.facebook.com/robert.r.wagar" rel="noreferrer noopener" target="_blank"><FaFacebookSquare/></a>
                </Icon>
                </div>
            </Container>
            </BgContact>
        
        
     );
}
 
export default Contact;