import React from 'react'
import './HomeIntro.scss'
import { useSpring, animated } from 'react-spring'




const HomeIntro = () => {

    const fade = useSpring({from: {opacity: 0}, opacity: 1}); 
    const fadeIn = useSpring({from: {transform: 'translateX(900px)', opacity: 0}, transform: 'translateX(0px)' , opacity: 1});
    const fadeInA = useSpring({from: {transform: 'translateY(1500px)', opacity: 0}, transform: 'translateY(0px)' , opacity: 1});

    return (
        <animated.div className="home-intro" style={fade}>
            <div className="overlay">
                <div className="overlayImg"></div>
                <section className="top-section">
                    <animated.div style={fadeInA}>
                        <h1>Hi</h1>
                        <h1>I'm </h1>
                        <h1>Robert</h1>
                        </animated.div>
                        <h5>Developer & Dancer</h5>
                        <br/><br/>
                </section>
                <div className="mid-section-top">
                <h2><span>...</span> <br/>
                             If you are looking for a upcoming new <b>developer</b> or a experienced <b>danceteacher</b> thats been active for the past 25+ years you come to the right place</h2>    
                </div>
                                        
                    
                <div className="mid-section">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae enim nostrum et similique! Ea ducimus asperiores at cumque sapiente.</h1>
                    <div className="mid-section-left">
                            <h2>I'm always looking for <span className="highlight">creative solutions</span> in everythings life. <br/> Without creativity we would be standing still</h2>
                        </div>                        
                    </div>
                    <section className="bottom-section">
                        <div className="bottom-section-left">
                            <h3>
                                <i>My design</i> is equally about <br/>
                            <span className="highlight">what it does</span> 
                            <br/>
                            as much as how it attracts the eye
                            </h3>
                        </div>
                        <div className="bottom-section-right">
                            <h2>As a developer I'm <i><b>focused</b></i> on finding the best solutions for you problems. <br/> And we will <br/><span className="highlight">work together</span> to do so</h2>
                        </div>
                </section>
            </div>
    </animated.div>
     );
}
 
export default HomeIntro;