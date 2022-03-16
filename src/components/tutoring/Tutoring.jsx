import "./tutoring.css";
import { tutoring } from "../../constants/constants-tutoring";

const Tutoring = () => {
    return (
        <div id="tutoring" className="tutoring">
            <div className="tutoring-title">
                {tutoring.title}
            </div>
            <div className="tutoring-wrapper">
                <div className="tutoring-left">
                    <div className="tutoring-about">
                        <div className="tutoring-career-title">
                            {tutoring.careerTitle}
                        </div>
                        <div className="tutoring-description">
                            {tutoring.paragraphs.map((paragraph) => (
                                <p className="tutoring-paragraph">                                        {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="tutoring-contact">
                            <p>{tutoring.contactMe}</p>
                        </div>
                    </div>
                </div>
                <div className="tutoring-right">
                    <div className="tutoring-maxiMatma">
                        <div className="tutoring-maxiMatma-title">
                            {tutoring.maxiMatmaTitle}
                        </div>
                        <div className="tutoring-maxiMatma-description">
                            {tutoring.maxiMatmaDesc.map((paragraph) => (
                                <p className="tutoring-maxiMatma-paragraph">
                                    {paragraph}
                                </p>
                            ))} 
                        </div>        
                    </div>    
                    <div className="tutoring-maxiMatma-img-wrapper">
                        <a href="https://maximatma.pl/" target="_blank" rel="noreferrer">
                            <img src={tutoring.maxiMatmaLogo} alt="" className="tutoring-maxiMatma-img"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutoring;