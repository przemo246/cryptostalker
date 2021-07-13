import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { AddAssetModal } from "./AddAssetModal";
import { Modal } from "./Modal";
import reactDom from "react-dom";

export const ModalController = ({ open, type, onClose }) => {
  if (!open) return null;
  let modal;
  if (type === "login") {
    modal = <LoginModal />;
  }
  if (type === "register") {
    modal = <RegisterModal />;
  }
  if (type === "add-asset") {
    modal = <AddAssetModal />;
  }
  return reactDom.createPortal(
    <>
      <div className="overlay"></div>
      <Modal onClose={onClose}>{modal}</Modal>
    </>,
    document.getElementById("modal-root")
  );
};
