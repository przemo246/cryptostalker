export const UserAccount = () => {
  return (
    <>
      <div className="user-account" data-auth-visibility="true">
        <img
          src="img/profile.png"
          alt="Profile picture"
          className="user-account__profile-pic"
        />
        <div className="user-account__details">
          <span className="user-account__name">Anonymous</span>
          <span className="user-account__email">anonymous@gmail.com</span>
        </div>
        <button data-user-logout title="Log out">
          <img src="img/switch.svg" className="user-account__icon" />
        </button>
      </div>
      <div className="not-logged" data-auth-visibility="false">
        <button className="btn btn-gray" data-user-login>
          Log in
        </button>
        <button className="btn btn-green" data-user-register>
          Register
        </button>
      </div>
    </>
  );
};
