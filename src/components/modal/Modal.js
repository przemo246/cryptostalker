import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import AddAssetModal from "./AddAssetModal";
import reactDom from "react-dom";

const Modal = ({ open, type, onClose }) => {
  if (!open) return null;
  let modal;
  if (type === "login") {
    modal = <LoginModal onClose={onClose} />;
  }
  if (type === "register") {
    modal = <RegisterModal onClose={onClose} />;
  }
  if (type === "add-asset") {
    modal = <AddAssetModal onClose={onClose} />;
  }
  return reactDom.createPortal(
    <>
      <div className="overlay"></div>
      {modal}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
