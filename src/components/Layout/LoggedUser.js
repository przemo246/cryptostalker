import logOutIcon from '../../img/switch.svg';

export const LoggedUser = () => {
  return (
    <div className="user-account">
      <img src="img/profile.png" alt="" className="user-account__profile-pic" />
      <div className="user-account__details">
        <span className="user-account__name">Anonymous</span>
        <span className="user-account__email">anonymous@gmail.com</span>
      </div>
      <button title="Log out">
        <img src={logOutIcon} alt="" className="user-account__icon" />
      </button>
    </div>
  );
};
