import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../video/paint.webm';
import { useSpring, animated } from 'react-spring'
import './Projects.scss'
import './ProjectCard.scss'


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
                                            <div className="card" key={id}>
                                            <div className="card-title">{name}</div><div className="card-bar"><div className="emptyBar"></div><div className="filledBar"></div></div>
                                            <div className="card-info">{description}</div>
                                                
                                                    <button onClick={()=> window.open(html_url, "_blank")} className="repoBtn">Check</button>
                                                
                                            </div>

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