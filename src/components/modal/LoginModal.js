const LoginModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal__close">
        <button onClick={onClose} title="Close">
          &times;
        </button>
      </div>
      <div className="modal__content">
        <div className="modal__heading">Log in</div>
        <div className="modal__content">
          <form className="popup__form">
            <label htmlFor="email">E-mail</label>
            <input
              className="modal__input"
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="username">Password</label>
            <input
              className="modal__input"
              type="password"
              name="password"
              id="password"
            />
            <button className="btn btn-green" type="submit">
              OK
            </button>
            <div className="notification"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
