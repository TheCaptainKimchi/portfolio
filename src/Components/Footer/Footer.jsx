import "./Footer.scss";
import GithubIcon from "../../Assets/Icons/github-icon.svg";
import EmailIcon from "../../Assets/Icons/email-icon.svg";
import LinkedInIcon from "../../Assets/Icons/linkedin-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a className="footer__name" href="/">
        <h3 className="footer__name-text">R</h3>
      </a>
      <div className="footer__socials">
        <a
          className="footer__socials-icon linkedIn"
          href="https://www.linkedin.com/in/raulcalero/"
        >
          <img src={LinkedInIcon} alt="email-icon"></img>
        </a>
        <a
          className="footer__socials-icon email"
          href="mailto:raulcalero7@gmail.com"
        >
          <img src={EmailIcon} alt="linked-in-icon"></img>
        </a>
        <a
          className="footer__socials-icon github"
          href="https://github.com/TheCaptainKimchi"
        >
          <img src={GithubIcon} alt="github-icon"></img>
        </a>
      </div>
      <p className="footer__created">Created by Raul Calero</p>
    </div>
  );
};

export default Footer;
