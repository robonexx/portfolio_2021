import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import './Home.css'
import Weather from '../../Weather/Weather'
import TypeWriter from '../../TypeWriter/TypeWriter'
import Clock from '../../Clock/Clock'


const Container = styled.div`
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 90vh;
    margin: 0px auto;
    background: transparent;
    color: ${({ theme }) => theme.text};
    z-index: 5;
    overflow: hidden;
    `

    const Title = styled.h2`
    position: absolute;
    top: 2vh;
    left: 30%;
    font-family: 'Exo 2', sans-serif;
    font-size: 4vw;
    font-weight: 200;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px ${({ theme }) => theme.textShadow};
    
    @media (max-width: 900px) {
        top: 3vh;
        left: 26vw;
    }
    `;
    const TitleTwo = styled.h2`
    position: absolute;
    top: 64vh;
    right: 32vw;
    font-family: 'Exo 2', sans-serif;
    font-size: 5vw;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 5px 5px 2px #1e2e3e;

    @media (max-width: 768px) {
        font-size: 4vw;
        top: 65vh;
        right: 38vw;

    }
    `;
    const QuoteOne = styled.h1`
    font-family: 'Exo 2', sans-serif;
    font-weight: 200;
    position: absolute;
    top: 26vh;
    left: 28vw;
    font-size: 28px;
    width: 40vw;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px ${({ theme }) => theme.textShadow};
    
    @media (max-width: 900px) {
        width: 35vw;
        top: 18vh;
        left: 26vw;
        background: rgba(0,0,0,0.5);
        font-size: 16px;
    }
    `;
    const QuoteTwo = styled.h1`
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    position: absolute;
    background: linear-gradient(120deg, black, transparent 70%);
    top: 38vh;
    right: 12vw;
    font-size: 22px;
    width: 12%;
    text-transform: uppercase;
    text-shadow: 5px 5px 5px #1e2e3e;
    
    @media (max-width: 1300px) {
        top: 24vh;
        right: 14vw;
        width: 10%;
        background: rgba(0,0,0,0.5);
        font-size: 16px;
        word-break: break-word;
        -webkit-hyphens: auto;
   -moz-hyphens: auto;
        hyphens: auto;
    }
    @media (max-width: 768px) {
        top: 20vh;
        right: 17vw;
        width: 8%;
        background: rgba(0,0,0,0.5);
        font-size: 14px;
        opacity: 0;
    }
    `;
    const QuoteThree = styled.h1`
    font-family: 'Exo 2', sans-serif;
    font-weight: 200;
    position: absolute;
    bottom: 3vh;
    right: 10vw;
    width: 15%;
    font-size: 16px;
    text-transform: uppercase;
    text-shadow: 5px 5px 5px #1e2e3e;

    @media (max-width: 768px) {
        right: 10vw;
        font-size: 12px;
        width: 16%;
    }
    `;

    const HomeAbout = styled.div`
    position: absolute;
    top: 10em;
    left: 10em;
    font-size: 1rem;
    
    width: 30%;

    &>p {
        color: ${({ theme }) => theme.text};
        background: linear-gradient(120deg, white, transparent);
        text-shadow: 2px 2px 3px solid black;
    }

    @media (max-width: 768px) {
        top: 7em;
        left: 1em;
        font-size: 0.8rem;
        width: 95%;
    }
    `;


const Home = () => {

    const fade = useSpring({from: {opacity: 0}, opacity: 1}); 
    const fadeIn = useSpring({from: {transform: 'translateX(900px)', opacity: 0}, transform: 'translateX(0px)' , opacity: 1});
    const fadeInA = useSpring({from: {transform: 'translateX(-700px)', opacity: 0}, transform: 'translateX(0px)' , opacity: 1});

        
    
    return ( 

        <animated.div className="home" style={fade}>
            <div className="container2">
         <div className="no-img"></div>
         <div className="img"></div>
         <div className="no-img"></div>
         <div className="no-img"></div>
         <div className="no-img"></div>
         <div className="img"></div>
         <div className="img"></div>
         <div className="no-img"></div>
         <div className="img"></div>
         <div className="img"></div>
         <div className="no-img"></div>
         <div className="img"></div>
        </div>

        {/* Lägger in en klocka på på sidan som visas hela på homepage under naven. */}
        {/* <div className="clock">
        <Clock />
        </div> */}
        {/* Vädret visas i toppen på homepage */}
        <div className="weather">
        <Weather />
        </div>
            <Container>
                <animated.div style={fadeInA}>
                <Title>Let's get creative</Title>
                </animated.div>
                <QuoteOne>
                Creative problem solving is a skill. And like all skills, it can be learned and developed. The more you use these problem-solving techniques, the more they become second nature.
                </QuoteOne>
                <QuoteTwo>
                "Logic will get you from A to B. Imagination will take you everywhere."
                </QuoteTwo>
                <animated.div style={fadeIn}>
                <TitleTwo>FRONT-END-DEV</TitleTwo>
                </animated.div>
                <div>
                <QuoteThree>Being creative is keeping our inner child alive</QuoteThree>
                </div>
                </Container>
                
                <div className="container3">
                    {/* Lägger in typewriter inom samma div som img grid, för att ändra storlek på grid layout medans typewriter skriver. testar */}
                <div className="typewriter">
        <TypeWriter />
        </div>

        <HomeAbout>
            <p>
                    My name is Robert Wägar I´m a junior developer. <br/><br/>
                    At the moment I'm studying at <b>KYH front end developer education</b> in STHLM. The education ends june 2021. <br/><br/> 
                    I have developed skills in <b>HTML, CSS, SASS, JS, AJAX</b> currently learning <b>REACT</b> & some of its libraries. <br /><br />
                    The fact that this community is very helpful is a nice addition & I'm looking forward to be a part of it. <br/><br/>
                    Wanna know more, read my about page...
            </p>
        </HomeAbout>

         <div className="img"></div>
         <div className="img"></div>
         <div className="no-img"></div>
         <div className="no-img"></div>
         <div className="img"></div>
         <div className="img"></div>
         <div className="img"></div>
         <div className="img"></div>
         <div className="img"></div>
         <div className="no-img"></div>
         <div className="no-img"></div>
         <div className="no-img"></div>
        </div>
        
                </animated.div>
                
        
     );
}
 
export default Home;