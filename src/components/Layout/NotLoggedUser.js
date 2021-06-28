import { useState } from 'react';
import Modal from '../modal/Modal';

export const NotLoggedUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  return (
    <>
      <div className="not-logged">
        <button
          className="btn btn-gray"
          onClick={() => {
            setIsOpen(true);
            setModalType('login');
          }}
        >
          Log in
        </button>
        <button
          className="btn btn-green"
          onClick={() => {
            setIsOpen(true);
            setModalType('register');
          }}
        >
          Register
        </button>
      </div>
      <Modal open={isOpen} type={modalType} onClose={() => setIsOpen(false)} />
    </>
  );
};
