import React, { useState, useEffect } from 'react'
import colors from '../../video/paint.webm';
import './Projects.scss'
import './ProjectCard.scss'


const Projects = () => {

    const [repos, setRepos] = useState([])

    useEffect(async () => {
        const res = await fetch('https://api.github.com/users/robonexx/repos?per_page=5&sort=created:asc')
        const data = await res.json()
        console.log(data)
        setRepos(data)
    }, [])

    
    return ( 
        <div className="projects">

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
                <div>
                <h1>Some of the projects I've worked on</h1>
                </div>
                <div>
                    <div className="container">
                        <div className="repos">
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
                </div>
                
            </div>
            </div>
        
        
     );
}
 
export default Projects;