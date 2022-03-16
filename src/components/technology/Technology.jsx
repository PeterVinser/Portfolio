import "./technology.css";
import { technology } from "../../constants/constants-technology";

const Technology = () => {
    return (
        <div id="technology" className="technology">
            <div className="technology-title">
                {technology.title}
            </div>
            <div className="technology-description-bg">
                <div className="technology-description">
                    {technology.desc}
                </div>
            </div>
            <div className="technology-courses-title">
                {technology.coursesTitle}
            </div>
            <div className="technology-courses">
                {technology.courses.map((course) => (
                    <div className="technology-course">
                        <div className="technology-course-title">
                            {course.title} <br/>
                            {course.subtitle}
                        </div>
                        <div className="technology-course-img-wrapper">
                            <a href={course.link} target="_blank" rel="noreferrer">
                                <img src={course.img} alt="" className="technology-course-img"/>    
                            </a>
                        </div>
                        <div className="technology-course-progress-wrapper">
                            <img src={course.progress} alt="" className="technology-course-progress-img"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Technology;