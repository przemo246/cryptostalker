import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import reactDom from "react-dom";

const Modal = ({ open, type, onClose }) => {
  if (!open) return null;
  return reactDom.createPortal(
    <>
      <div className="overlay"></div>
      {type === "login" ? (
        <LoginModal onClose={onClose} />
      ) : (
        <RegisterModal onClose={onClose} />
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
