import "./about.css";
import Notebook from "../../img/notebook.png";
import { about } from "../../constants/constants-about";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                {about.title}
            </div>
            <div className="about-top">
                <div className="about-left">
                    <div className="about-description">
                        {about.paragraphs.map((paragraph) => (
                            <p className="about-paragraph">
                                {paragraph}
                            </p>
                        ))}
                        </div>
                    </div>
                <div className="about-right">
                    <div className="about-assistant">
                        <div className="about-assistant-title">
                            {about.appName}
                        </div>
                        <div className="about-assistant-img-wrapper">
                            <a href="https://github.com/PeterVinser/TeacherAssistant/" target="_blank" rel="noreferrer">
                                <img src={Notebook} alt="" className="about-assistant-img"/>
                            </a>
                            </div>  
                        <div className="about-assistant-description">
                            {about.appDescription.map((paragraph) => (
                                <div className="about-assistant-paragraph">
                                    {paragraph}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-timeline">
                {about.timeline.map((year) => (
                        <div className="about-timeline-year">                                
                        <div className="about-timeline-year-title">
                            {year.title}
                        </div>
                        <div className="about-timeline-year-desc">
                            {year.desc.map((line) => (
                                <p className="about-timeline-year-paragraph">{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;