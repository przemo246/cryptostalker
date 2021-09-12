import githubIcon from "../../img/github.svg";
import linkedinIcon from "../../img/linkedin.svg";
export const Footer = ({ propsClassName }) => {
  return (
    <footer className={propsClassName}>
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
  );
};
