import "./scss/App.scss";
import homeIcon from "./img/home.svg";
import rocketIcon from "./img/rocket.svg";
import pieChartIcon from "./img/pie-chart.svg";
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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  const user = useUser();
  return (
    <Router>
      <div className="container">
        <Navigation>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              <img src={homeIcon} alt="" className="navigation__icon" />
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/top-crypto" className="navigation__link">
              <img src={rocketIcon} alt="" className="navigation__icon" />
              Top crypto
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/portfolio" className="navigation__link">
              <img src={pieChartIcon} alt="" className="navigation__icon" />
              Portfolio
            </Link>
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
