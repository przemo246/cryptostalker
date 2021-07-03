import logOutIcon from "../../img/switch.svg";
import { auth } from "../../firebase.config";
import { useUser } from "../../hooks/useUser";

export const LoggedUser = () => {
  const user = useUser();
  console.log(user);
  return (
    <div className="user-account">
      <img src="img/profile.png" alt="" className="user-account__profile-pic" />
      <div className="user-account__details">
        <span className="user-account__name">Anonymous</span>
        <span className="user-account__email">anonymous@gmail.com</span>
      </div>
      <button title="Log out" onClick={() => auth.signOut()}>
        <img src={logOutIcon} alt="" className="user-account__icon" />
      </button>
    </div>
  );
};
