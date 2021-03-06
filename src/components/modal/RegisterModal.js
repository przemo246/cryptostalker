import { useState } from "react";
import { auth, storage } from "../../firebase.config";
import ButtonGreen from "../atoms/ButtonGreen";

export const RegisterModal = ({ onClose }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
    error: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const isAvatarMeetRequirements = (a) => {
    if (
      (a.type.includes("jpg") ||
        a.type.includes("png") ||
        a.type.includes("jpeg")) &&
      a.size <= 100000
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFileChange = (e) => {
    const avatar = e.target.files[0];
    if (avatar) {
      if (isAvatarMeetRequirements(avatar)) {
        setValues({ ...values, avatar, error: "" });
      } else {
        setValues({
          ...values,
          avatar,
          error:
            "Accepted file extensions: .jpg, .jpeg, .png and size of maximum 100kB",
        });
      }
    }
  };

  const addPictureToStorage = (id, avatar) => {
    return storage.ref(`users/${id}/profile.jpg`).put(avatar);
  };

  const registerUser = ({ username, email, password, avatar }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((token) => {
        token.user.updateProfile({
          displayName: username,
        });
        if (avatar && isAvatarMeetRequirements(avatar)) {
          addPictureToStorage(token.user.uid, avatar);
        }
        onClose();
        auth.signOut();
      })
      .catch((err) => setValues({ ...values, error: err.message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, avatar } = values;
    if (
      username &&
      email &&
      password &&
      avatar &&
      isAvatarMeetRequirements(avatar)
    ) {
      registerUser(values);
    } else if (username && email && password && avatar === null) {
      registerUser(values);
    }
  };
  return (
    <>
      <div className="modal__heading">Register</div>
      <form className="modal__form">
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
          autoComplete="on"
          required
        />
        <label htmlFor="avatar">Avatar (optional)</label>
        <input
          type="file"
          id="avatar"
          className="modal__input"
          name="avatar"
          onChange={handleFileChange}
        />
        <ButtonGreen text="OK" handleOnClick={handleSubmit} />
        <div className="notification">{values.error}</div>
      </form>
    </>
  );
};
