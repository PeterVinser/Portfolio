import "./achievements.css";
import { achievements } from "../../constants/constants-achievements";

const Achievements = () => {
    return (
        <div className="achievements">
            <div className="achievements-title">
                {achievements.title}
            </div>
            <div className="achievements-items">
                {achievements.competitions.map((achievement) => (
                    <div className="achievements-item">
                        <div className="achievement-item-title">
                            {achievement.title}
                        </div>
                        <div className="achievement-item-description">
                            {achievement.desc}
                        </div>
                        <div className="achievement-item-img-wrapper">
                            <a href={achievement.link} target="_blank" rel="noreferrer">
                                <img src={achievement.img} alt="" className="achievement-item-img"/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements;