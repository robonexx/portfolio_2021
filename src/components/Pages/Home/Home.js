import './Home.scss'
import LandingVideo from '../../video/earthMobile.webm';
import TypeWriter from '../../TypeWriter/TypeWriter'
import HomeIntro from '../../Homepage_Intro/Home-Intro'

const Home = () => {

        
    
return ( 

    <div className="home">
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
            
    </div>               
        
     );
}
 
export default Home;