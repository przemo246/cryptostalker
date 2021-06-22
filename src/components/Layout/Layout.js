import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className="container">
      <Navigation />
      <main className="main">
        <header className="header">
          <div className="heading-container">
            <h1 className="heading-primary">
              <span id="greet"></span>
              <span className="green-highlight">Anonymous!</span>
            </h1>
            <span className="greeting-subtitle">
              this is a greeting in <span id="lang"></span> 😉
            </span>
          </div>
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
        </header>
        <section className="content"></section>
      </main>
    </div>
  );
};
