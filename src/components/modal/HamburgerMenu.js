import { ImHome, ImRocket, ImPieChart } from "react-icons/im";
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
            <ImHome className="hamburger__icon" />
            Home
          </li>
          <li
            className="hamburger__item"
            onClick={() => pushToRoute("/top-crypto")}
          >
            <ImRocket className="hamburger__icon" />
            Top Crypto
          </li>
          <li
            className="hamburger__item"
            onClick={() => pushToRoute("/portfolio")}
          >
            <ImPieChart className="hamburger__icon" />
            Portfolio
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(HamburgerMenu);
