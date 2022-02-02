import githubIcon from "../../img/github.svg";
import linkedinIcon from "../../img/linkedin.svg";
export const Footer = ({ propsClassName }) => {
  return (
    <footer className={propsClassName}>
      <div>
        Price data by{" "}
        <a className="footer__link" href="https://www.coingecko.com/">
          CoinGecko
        </a>
      </div>
      <div className="footer__icons">
        <a
          href="https://www.linkedin.com/in/przemyslaw-welenc/"
          className="footer__link"
        >
          <img src={linkedinIcon} className="footer__icon" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Przemo246" className="footer__link">
          <img src={githubIcon} className="footer__icon" alt="Github" />
        </a>
      </div>
    </footer>
  );
};
