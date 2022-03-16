import "./intro.css";
import { intro } from "../../constants/constants-intro";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-title">
                    <div className="intro-name">{intro.name}</div>
                    <div className="intro-professions">
                        <div className="intro-professions-wrapper">
                            {intro.professions.map((profession) => (   
                               <div className="intro-profession-item">{profession}</div>
                            ))}      
                        </div>
                    </div>
                    <button onClick={() => window.location='#about'} className="intro-more-button">
                        Learn More!
                    </button>
                </div>
            </div>
            <div className="intro-right">
                <img src={intro.photo} alt="" className="intro-img"/>
            </div>
        </div>
    )
}

export default Intro;