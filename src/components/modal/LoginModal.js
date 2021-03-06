import { useState } from "react";
import ButtonGreen from "../atoms/ButtonGreen";
import { auth } from "../../firebase.config";

export const LoginModal = ({ onClose }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    notification: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          onClose();
        })
        .catch((err) => {
          setValues({ ...values, notification: err.message });
        });
    }
  };

  return (
    <>
      <div className="modal__heading">Log in</div>
      <form className="modal__form">
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
        <label htmlFor="username">Password</label>
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          required
          autoComplete="on"
        />
        <ButtonGreen text="OK" handleOnClick={handleSubmit} />
        <div className="notification">{values.notification}</div>
      </form>
    </>
  );
};
