import githubIcon from "../../img/github.svg";
import linkedinIcon from "../../img/linkedin.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../img/Logo@2x.png";

export const Navigation = (props) => {
  return (
    <nav className="navigation">
      <div className="navigation__top">
        <img src={logo} alt="" className="navigation__logo" />
        <ul className="navigation__list">{props.children}</ul>
        <div className="navigation__hamburger">
          <GiHamburgerMenu color="#fff" size="2em" />
        </div>
      </div>
      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/przemyslaw-welenc/"
          className="footer__link"
        >
          <img src={linkedinIcon} className="footer__icon" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Przemo246" className="footer__link">
          <img src={githubIcon} className="footer__icon" alt="Github" />
        </a>
      </footer>
    </nav>
  );
};
