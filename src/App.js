import './App.scss';
import homeIcon from './img/home.svg';
import rocketIcon from './img/rocket.svg';
import pieChartIcon from './img/pie-chart.svg';
import { Navigation } from './components/layout/Navigation';
import { Heading } from './components/layout/Heading';
import { Container } from './components/layout/Container';
import { Content } from './components/layout/Content';
import { Main } from './components/layout/Main';
import { Header } from './components/layout/Header';
import { LoggedUser } from './components/layout/LoggedUser';
import { NotLoggedUser } from './components/layout/NotLoggedUser';
import { UserLoginDetails } from './hooks/UserLoginDetails';
import { News } from './components/news/News';
import { TopCrypto } from './components/top-crypto/TopCrypto';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const user = UserLoginDetails();
  console.log(user);
  return (
    <Router>
      <Container>
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
        <Main>
          <Header>
            <Heading />
            {user ? <LoggedUser /> : <NotLoggedUser />}
          </Header>
          <Content>
            <Switch>
              <Route exact path="/">
                <News />
              </Route>
              <Route path="/top-crypto">
                <TopCrypto />
              </Route>
              <Route path="/portfolio">
                {user ? <p>Portfolio</p> : <p>Please log in</p>}
              </Route>
            </Switch>
          </Content>
        </Main>
      </Container>
    </Router>
  );
}

export default App;
