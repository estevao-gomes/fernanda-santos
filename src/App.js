
import './App.css';
import Header from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* <Container className="fluid"> */}
      <Header/>
      <Main/>
      <Footer/>
      {/* </Container> */}
    </div>
  );
}

export default App;
