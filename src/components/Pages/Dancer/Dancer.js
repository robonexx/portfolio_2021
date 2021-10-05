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
                
                <div className="dancer-info">
                    <h3>Robert Wägar is a Swedish pioneer in HipHop and Locking, he is one of Sweden's most respected educators and dancers of all time.
During his long career that stretches back 25 years, he has taught at Sweden's most prominent schools such as Danscenter Sthlm, the Ballet Academy, the School of Dance, Åsafolkhögskolan's Five and One-Style educations, Fryshuset, House of Shapes and others.
Robert has studied for the pioneers of the United States and has received the awards "Original Style Locking Master student 2007" and "Original Lockers Master Award 2015"
He is a member of the GoGo brothers family (US) and Mass destruction (Swe).
He has choreographed for television, the melody festival, theaters, events, the childhood cancer gala, save the children, and for famous artists such as Wy-Clef Jean, Horace Brown, Jerry Williams, Basic Element and many more.
Judged competitions around the world such as Sdr, Fdo, Sade, Uk bboy champs preselections, Sdk preselections, Baltic Session, GetUp2GetDown, Juste debout Finals 2014 and more.
Robert is the educator behind some of the world's most prominent Swedish dancers today.</h3>
                </div>
            </div>
        );
    
}
 
export default Dancer;