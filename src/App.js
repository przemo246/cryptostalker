import './App.scss';
import { Navigation } from './components/Layout/Navigation';
import { Heading } from './components/Layout/Heading';
import { Container } from './components/Layout/Container';
import { Content } from './components/Layout/Content';
import { Main } from './components/Layout/Main';
import { Header } from './components/Layout/Header';
import { LoggedUser } from './components/Layout/LoggedUser';
import { NotLoggedUser } from './components/Layout/NotLoggedUser';
import { UserLoginDetails } from './hooks/UserLoginDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import homeIcon from './img/home.svg';
import rocketIcon from './img/rocket.svg';
import pieChartIcon from './img/pie-chart.svg';

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
                <p>Home</p>
              </Route>
              <Route path="/top-crypto">
                {user ? <p>Top crypto</p> : <p>Please log in</p>}
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
