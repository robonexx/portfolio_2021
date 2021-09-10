import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../video/paint.webm';
import { useSpring, animated } from 'react-spring'
import './Projects.scss'



const Card = styled.div`

display: flex;
  height: 280px;
  width: 200px;
  background-color: ${({ theme }) => theme.primaryCards};
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
/*   margin-left: -50px; */
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;

  &:hover {
    transform: translateY(-2px);
  transition: 0.4s ease-out;
  
  }

  &:hover ~ & {
    position: relative;
    left: 2px;
    transition: 0.4s ease-out;
  }

  @media (max-width:900px) {
    height: 160px;
    width: 100px;
        
    }
  `;


const Title = styled.div`
color: ${({ theme }) => theme.fontColor};
font-weight: 600;
position: absolute;
left: 20px;
top: 15px;

@media (max-width:1200px) {
    left: 10px;
    font-size: 0.8rem;
    word-break: break-all;
    }

`;

const Bar = styled.div`
position: absolute;
  top: 100px;
  left: 20px;
  height: 5px;
  width: 150px;

  @media (max-width:1200px) {
    top: 70px;
    left: 10px;
    width: 90px;
        
    }

  `;

const EmptyBar = styled.div`
  background-color: #2e3033;
  width: 90%;
  height: 100%;

  `;

const FilledBar = styled.div`
  position: absolute;
  top: 0px;
  z-index: 3;
  width: 3px;
  height: 100%;
  background: linear-gradient(90deg, #9ccc9c 0%, #649568 65%,#149414 100%);
  transition: 0.6s ease-out;

  ${Card}:hover & {
    width: 120px;
    transition: 0.4s ease-out;
  }
 
  `;

const Info = styled.div`
color: ${({ theme }) => theme.fontColor};
font-size: 13px;
font-weight: 600;
position: absolute;
left: 12px;
top: 155px;
margin-right: 9px;

@media (max-width:900px) {
    left: 10px;
    font-size: 0.4rem;
    left: 1rem;
    top: 5rem;
    word-break: break-all;
    
    }


`;


const Projects = () => {

    const [repos, setRepos] = useState([])

    useEffect(async () => {
        const res = await fetch('https://api.github.com/users/robonexx/repos')
        const data = await res.json()
        console.log(data)
        setRepos(data)
    }, [])


    const fade = useSpring({from: {opacity: 0}, opacity: 1}); 
    const fadeIn = useSpring({from: {transform: 'translateY(-300px)', opacity: 0}, transform: 'translateY(0px)', opacity: 1});

    
    
    return ( 
        <animated.div style={fade} className="projects">

            <video autoPlay loop muted
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                zIndex: "-1",
                
            }}
            >
                <source src={colors} type="video/mp4"/>
            </video> 
           <div className="wrapper">
                <animated.div  style={fadeIn}>
                <h1>Some of the projects I've worked on</h1>
                </animated.div>
                <animated.div>
                    <div className="container">
                        <div className="repos" style={fade}>
                {
                                    repos.map(({name, html_url, description, id}) => {
                                        return (
                                            <Card key={id}>
                                                <Title>{name}</Title><Bar><EmptyBar></EmptyBar><FilledBar></FilledBar></Bar><Info>{description}</Info>
                                                
                                                    <button onClick={()=> window.open(html_url, "_blank")} className="repoBtn">Check</button>
                                                
                                            </Card>

                                        )

                                    })
                                }
                    </div>
                </div>
                </animated.div>
                
            </div>
            </animated.div>
        
        
     );
}
 
export default Projects;