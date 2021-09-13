import './Dancer.scss'
import JudgeSolo from '../../video/judge_solo.webm'


const Dancer = () => {

        return (
            <div className="dancer-wrapper">
                <h1>ROB-ONE</h1>
                <div className="overlay-vid"></div>
              <video autoPlay="true" controls="controls"
                    className="dance-video">
                    <source src={JudgeSolo} type="video/webm" />
        </video>
            </div>
        );
    
}
 
export default Dancer;