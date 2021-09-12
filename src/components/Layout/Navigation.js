import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../img/Logo@2x.png";
import { useModal } from "../../hooks/useModal";
import { ModalController } from "../modal/ModalController";
import { Footer } from "./Footer";

export const Navigation = (props) => {
  const [isOpen, toggleIsOpen] = useModal();
  return (
    <>
      <nav className="navigation">
        <div className="navigation__top">
          <img src={logo} alt="" className="navigation__logo" />
          <ul className="navigation__list">{props.children}</ul>
          <div className="navigation__hamburger">
            <GiHamburgerMenu color="#fff" size="2em" onClick={toggleIsOpen} />
          </div>
        </div>
        <Footer propsClassName="footer" />
      </nav>
      <ModalController
        open={isOpen}
        type="hamburger-menu"
        onClose={toggleIsOpen}
      />
    </>
  );
};
