import { useState } from "react";
import { auth } from "../../firebase.config";

const RegisterModal = ({ onClose }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const registerUser = ({ username, email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((token) => {
        token.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => setValues({ ...values, error: err.message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = values;
    if (username && email && password) {
      registerUser(values);
      setValues({ username: "", email: "", password: "" });
    }
  };
  return (
    <div className="modal">
      <div className="modal__close">
        <button onClick={onClose} title="Close">
          &times;
        </button>
      </div>
      <div className="modal__content">
        <div className="modal__heading">Register</div>
        <div className="modal__content">
          <form className="popup__form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="modal__input"
              value={values.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              className="modal__input"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="modal__input"
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="avatar">Avatar (optional)</label>
            <input
              type="file"
              id="myFile"
              className="modal__input"
              name="filename"
            />
            <button
              className="btn btn-green"
              type="submit"
              onClick={handleSubmit}
            >
              OK
            </button>
            <div className="notification">{values.error}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
