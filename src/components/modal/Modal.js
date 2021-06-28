import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import reactDom from 'react-dom';

const Modal = (props) => {
  if (!props.open) return null;
  return reactDom.createPortal(
    <>
      <div className="overlay"></div>
      {props.type === 'login' ? <LoginModal /> : <RegisterModal />}
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
