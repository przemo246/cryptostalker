import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import AddAssetModal from "./AddAssetModal";
import reactDom from "react-dom";
import { useState } from "react";

const Modal = ({ open, type, onClose }) => {
  const [modalType, setModalType] = useState(null);
  if (!open) return null;
  if (type === "login") {
    setModalType(<LoginModal onClose={onClose} />);
  }
  if (type === "register") {
    setModalType(<RegisterModal onClose={onClose} />);
  }
  if (type === "add-asset") {
    setModalType(<AddAssetModal onClose={onClose} />);
  }
  return reactDom.createPortal(
    <>
      <div className="overlay"></div>
      {modalType}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
