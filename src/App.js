import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Login from './components/login';
import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
import Register from './components/register';
import Notes from './components/notes';

function App() {
  return (
    <>
      <div className="nav-wrapper-bg">
        <div className="nav-wrapper">
          <Navbar expand="lg" variant="dark">
            <Container fluid>
              <Navbar.Brand href="#">
                CodeMastry
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </div>

      <section className="main-content">
        <Router>
          <Notes />
        </Router>
      </section>
    </>
  );
}

export default App;
