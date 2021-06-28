import { useState } from 'react';
import Modal from '../modal/Modal';

export const NotLoggedUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="not-logged">
        <button className="btn btn-gray" onClick={() => setIsOpen(true)}>
          Log in
        </button>
        <button className="btn btn-green" onClick={() => setIsOpen(true)}>
          Register
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
