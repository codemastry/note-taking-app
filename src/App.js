import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Login from './components/login';
import { Container, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/register';
import Notes from './components/notes';

function App() {
  const [isLoggedIn] = React.useState(localStorage.getItem('token') !== null);
  const [username] = React.useState(localStorage.getItem('username'));

  const _logout = () => {
    localStorage.clear();
    window.location = "/login";
  }
  return (
    <>
      <div className="nav-wrapper-bg">
        <div className="nav-wrapper">
          <Navbar expand="lg" variant="dark">
            <Container fluid>
              <Navbar.Brand href="#">
                CodeMastry
              </Navbar.Brand>
              {isLoggedIn && <>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    Signed in as: <a href="#login">{username}</a>
                  </Navbar.Text>
                  <Button onClick={_logout} className="ms-2" variant="outline-danger" size="sm"><i class="bi bi-box-arrow-right"></i> Logout</Button>
                </Navbar.Collapse>
              </>}
            </Container>
          </Navbar>
        </div>
      </div>

      <section className="main-content">
        <Router>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
