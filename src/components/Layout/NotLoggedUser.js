import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { ModalController } from "../modal/ModalController";

export const NotLoggedUser = () => {
  const [isOpen, toggleIsOpen] = useModal();
  const [modalType, setModalType] = useState(null);
  return (
    <>
      <div className="not-logged">
        <button
          className="btn btn-gray"
          onClick={() => {
            toggleIsOpen();
            setModalType("login");
          }}
        >
          Log in
        </button>
        <button
          className="btn btn-green"
          onClick={() => {
            toggleIsOpen();
            setModalType("register");
          }}
        >
          Register
        </button>
      </div>
      <ModalController open={isOpen} type={modalType} onClose={toggleIsOpen} />
    </>
  );
};
