import homeIcon from '../../img/home.svg';
import rocketIcon from '../../img/rocket.svg';
import pieChartIcon from '../../img/pie-chart.svg';
import githubIcon from '../../img/github.svg';
import linkedinIcon from '../../img/linkedin.svg';
import logo from '../../img/logo.svg';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__top">
        <img src={logo} alt="" className="navigation__logo" />
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link" data-navigation-home>
              <img src={homeIcon} className="navigation__icon" />
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link" data-navigation-top-crypto>
              <img src={rocketIcon} className="navigation__icon" />
              Top crypto
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link" data-navigation-portfolio>
              <img src={pieChartIcon} className="navigation__icon" />
              Portfolio
            </a>
          </li>
        </ul>
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
