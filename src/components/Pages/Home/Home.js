import './Home.scss'
import { motion } from 'framer-motion'
import LandingVideo from '../../video/earthMobile.webm';
import TypeWriter from '../../TypeWriter/TypeWriter'
import HomeIntro from '../../Homepage_Intro/Home-Intro'

const Home = () => {

        
    
return ( 

    <motion.div 
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{ opacity: 1, scaleX: 1 }}
    exit={{ opacity: 0, scaleX: 0 }}
    transition={{ duration: 0.6 }}
    className="home">
        <video autoPlay loop muted
                    style={{
                        position: "absolute",
                        margin: "0",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: "-1",
                        objectFit: "cover",

                    }}
                >
                    <source src={LandingVideo} type="video/webm" />
        </video>
        <HomeIntro />            
            
        </motion.div>          
        
     );
}
 
export default Home;