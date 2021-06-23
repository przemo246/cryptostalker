import './App.scss';
import { Navigation } from './components/Layout/Navigation';
import { Heading } from './components/Layout/Heading';
import { Container } from './components/Layout/Container';
import { Content } from './components/Layout/Content';
import { Main } from './components/Layout/Main';
import { Header } from './components/Layout/Header';
import { UserAccount } from './components/Layout/UserAccount';

function App() {
  return (
    <Container>
      <Navigation />
      <Main>
        <Header>
          <Heading />
          <UserAccount />
        </Header>
        <Content>
          <p>Lorem</p>
        </Content>
      </Main>
    </Container>
  );
}

export default App;
