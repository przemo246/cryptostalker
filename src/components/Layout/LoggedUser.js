import logOutIcon from "../../img/switch.svg";
import profilePic from "../../img/profile.png";
import { auth, storage } from "../../firebase.config";
import { useUser } from "../../hooks/useUser";
import { useState, useEffect } from "react";

export const LoggedUser = () => {
  const [avatar, setAvatar] = useState(null);
  const user = useUser();
  useEffect(() => {
    storage
      .ref(`users/${user?.uid}/profile.jpg`)
      .getDownloadURL()
      .then((avatarUrl) => setAvatar(avatarUrl))
      .catch((error) => console.error(error.message));
  }, [user?.uid]);
  return (
    <div className="user-account">
      <img
        src={avatar || profilePic}
        alt=""
        className="user-account__profile-pic"
      />
      <div className="user-account__details">
        <span className="user-account__name">{user?.displayName}</span>
        <span className="user-account__email">{user?.email}</span>
      </div>
      <button title="Log out" onClick={() => auth.signOut()}>
        <img src={logOutIcon} alt="" className="user-account__icon" />
      </button>
    </div>
  );
};
