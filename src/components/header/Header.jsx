import "./header.css";
import { sections } from "../../constants/constants"
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="header-home">
                Portfolio
            </a>
            <div className="header-sections">
                {sections.map((section) => (
                    <a href={section.link} className="header-section-item">
                        {section.title}
                    </a>
                ))}
            </div>
            <div className="header-social">
                <a href="https://github.com/PeterVinser" target="_blank" rel="noreferrer" className="header-social-item">
                    <AiFillGithub/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009351712245" target="_blank" rel="noreferrer" className="header-social-item">
                    <AiFillFacebook/>
                </a>
                <a href="https://www.linkedin.com/in/piotr-okninski-00748321a/" target="_blank" rel="noreferrer" className="header-social-item">
                    <AiFillLinkedin/>
                </a>
            </div>
        </div>
    )
}

export default Header;