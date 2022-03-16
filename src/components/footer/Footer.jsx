import "./footer.css";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { footer } from "../../constants/constants-footer";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contact">
                <div className="footer-contact-left">
                    <div className="footer-email-wrapper">
                        <div className="footer-email-title">
                            {footer.emailTitle}
                        </div>
                        <div className="footer-email">
                            {footer.email}
                        </div>
                    </div>
                    <div className="footer-phone-wrapper">
                        <div className="footer-phone-title">
                            {footer.phoneTitle}
                        </div>
                        <div className="footer-phone">
                            {footer.phone}
                        </div>
                    </div>
                </div>
                <div className="footer-contact-right">
                    <div className="footer-social">
                        <a href="https://github.com/PeterVinser" target="_blank" rel="noreferrer" className="footer-social-item">
                            <AiFillGithub/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009351712245" target="_blank" rel="noreferrer" className="footer-social-item">
                            <AiFillFacebook/>
                        </a>
                        <a href="https://www.linkedin.com/in/piotr-okninski-00748321a/" target="_blank" rel="noreferrer" className="footer-social-item">
                            <AiFillLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; {footer.copyright}
            </div>
        </div>
    )
}

export default Footer;