import "./scss/App.scss";
import { ImHome, ImRocket, ImPieChart } from "react-icons/im";
import { Navigation } from "./components/Layout/Navigation";
import { Heading } from "./components/Layout/Heading";
import { Header } from "./components/Layout/Header";
import { LoggedUser } from "./components/Layout/LoggedUser";
import { NotLoggedUser } from "./components/Layout/NotLoggedUser";
import { useUser } from "./hooks/useUser";
import { News } from "./components/news/News";
import { TopCrypto } from "./components/top-crypto/TopCrypto";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Footer } from "./components/Layout/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export const App = () => {
  const user = useUser();
  return (
    <Router>
      <div className="container">
        <Navigation>
          <li className="navigation__item">
            <NavLink
              to="/"
              activeClassName="navigation__link--active"
              className="navigation__link"
            >
              <ImHome className="navigation__icon" />
              Home
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/top-crypto"
              activeClassName="navigation__link--active"
              className="navigation__link"
            >
              <ImRocket className="navigation__icon" />
              Top crypto
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/portfolio"
              activeClassName="navigation__link--active"
              className="navigation__link"
            >
              <ImPieChart className="navigation__icon" />
              Portfolio
            </NavLink>
          </li>
        </Navigation>
        <main className="main">
          <Header>
            <Heading />
            {user ? <LoggedUser /> : <NotLoggedUser />}
          </Header>
          <section className="content">
            <Switch>
              <Route exact path="/">
                <News />
              </Route>
              <Route path="/top-crypto">
                <TopCrypto />
              </Route>
              <Route path="/portfolio">
                {user ? <Portfolio /> : <p>Please log in or register</p>}
              </Route>
            </Switch>
          </section>
        </main>
        <Footer propsClassName="footer footer__mobile" />
      </div>
    </Router>
  );
};
