import homeIcon from "../../img/home.svg";
import rocketIcon from "../../img/rocket.svg";
import pieChartIcon from "../../img/pie-chart.svg";
import { withRouter } from "react-router-dom";

const HamburgerMenu = ({ history, onClose }) => {
  const pushToRoute = (route) => {
    history.push(route);
    onClose();
  };
  return (
    <div className="hamburger">
      <div className="hamburger__close">
        <button title="Close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="hamburger__content">
        <ul className="hamburger__list">
          <li className="hamburger__item" onClick={() => pushToRoute("/")}>
            <img src={homeIcon} alt="" className="hamburger__icon" />
            Home
          </li>
          <li
            className="hamburger__item"
            onClick={() => pushToRoute("/top-crypto")}
          >
            <img src={rocketIcon} alt="" className="hamburger__icon" />
            Top Crypto
          </li>
          <li
            className="hamburger__item"
            onClick={() => pushToRoute("/portfolio")}
          >
            <img src={pieChartIcon} alt="" className="hamburger__icon" />
            Portfolio
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(HamburgerMenu);
