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
    transition={{ duration: 0.3 }}
    className="home">
        <video autoPlay loop muted
                    className="home-video">
                    <source src={LandingVideo} type="video/webm" />
        </video>
        <HomeIntro />            
            
        </motion.div>          
        
     );
}
 
export default Home;