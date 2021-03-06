import React from 'react'
import './HomeIntro.scss'




const HomeIntro = () => {

    return (
        <div className="home-intro">
            <div className="overlay">
                <div className="overlayImg"></div>
                <section className="top-section child">
                    <div>
                        <h1>Hi</h1>
                        <h1>I'm </h1>
                        <h1>Robert</h1>
                        </div>
                        <h5>Developer & Dancer</h5>
                        <br/><br/>
                </section>
                <section className="mid-section-top child">
                <h2><span>...</span> <br/>
                             If you are looking for a <b>developer</b> to bring your ideas to life or a experienced <b>danceteacher</b> thats been active for the past 25+ years you come to the right place</h2>    
                </section>
                                        
                    
                <section className="mid-section child">
                            <h2>I'm always looking for <span className="highlight">creative solutions</span> in everythings life. <br/> Without creativity we would be standing still</h2>                   
                    </section>
                    <section className="bottom-section child">
                        <div className="bottom-section-left">
                            <h3>
                                <i>My design</i> is equally about <br/>
                            <span className="highlight">what it does</span> 
                            <br/>
                            as much as how it attracts the eye
                            </h3>
                        </div>
                        <div className="bottom-section-right">
                            <h2>As a developer I'm <span className="highlight">focused</span> on finding the best solutions for you problems. <br/> And we will <br/><span className="highlight">work together</span> to do so</h2>
                        </div>
                </section>
            </div>
    </div>
     );
}
 
export default HomeIntro;