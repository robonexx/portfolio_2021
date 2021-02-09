import styled from 'styled-components'
import colors from '../../video/paint.mp4';
import projectImg from '../../../img/beyou.jpg';
import { useSpring, animated } from 'react-spring'
/* import { render } from 'react-dom';
import Typed from 'react-typed'; */

const BGImg = styled.img.attrs({ src: `${projectImg}`})`
width: 100%;
height: 92vh;
position: absolute;
top: 8vh;
left: 0;
bottom: 0;
opacity: 0.5;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: rgba(204, 125, 243, 0.377);
    background-blend-mode: difference;

z-index: 1;
`; 

const Container = styled.div`
position: absolute;
top: 20vh;
left: 50%;
margin-top: 4vh;
transform: translate(-50%);
width: 80%;
height: 74vh;
margin: 0px auto;
padding: 6%;
padding-top: 3%;
background: rgb(5, 5, 20, 0.1);
border-radius: 10px;
color: #fafafa;
box-shadow: 2px 4px 5px rgb(0, 0, 0, 0.5);
z-index: -1;
`;

    const Title = styled.h1`
    background: -webkit-linear-gradient(#603f, rgba(0,0,0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Abril Fatface', cursive;
    font-size: 6rem;
    filter: drop-shadow(6px 3px 2px #6dd4);
    text-align: center;
    text-transform: uppercase;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: 3rem;
        width: 100%;
    }
    `;

    const Section = styled.section`
    font-family: 'Special Elite', cursive;
    font-size: 3rem;
    margin-top: 20vh;
    color: ${({ theme }) => theme.text};
    text-shadow: 2px 2px 2px ${({ theme }) => theme.textShadow};

    @media (max-width: 768px) {
        font-size: 2rem;
        width: 100%;
    }
    `;


const Projects = () => {

    const fade = useSpring({from: {opacity: 0}, opacity: 1}); 
    const fadeIn = useSpring({from: {transform: 'translateY(-300px)', opacity: 0}, transform: 'translateY(0px)', opacity: 1});

    
    
    return ( 
        <animated.div style={fade}>

            <video autoPlay loop muted
            style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                zIndex: "-1",
                
            }}
            >
                <source src={colors} type="video/mp4"/>
            </video> 
            <BGImg />
            <Container>
                <animated.div  style={fadeIn}>
                <Title>Projects</Title>
                </animated.div>
                <Section>
                <p>Coming soon...</p>
                <p>Until then you can check my github or codepen you'll find the link on my contact page</p>
                </Section>
                
            </Container>
            </animated.div>
        
        
     );
}
 
export default Projects;