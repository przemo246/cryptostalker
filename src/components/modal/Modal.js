export const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__close">
        <button onClick={onClose} title="Close">
          &times;
        </button>
      </div>
      <div className="modal__content">{children}</div>
    </div>
  );
};
