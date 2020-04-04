import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <Container fluid className="App">
      <Row>
        <Col md={true}>
          <Menu/>

          <Container>
            <p>Built using React
            <img src={logo} className="App-logo" alt="logo" />
            </p>
          </Container>
        </Col>

        <Col className="App-main-content">
          <Container>
            <p>Some jibber jabber</p>
          </Container>
        </Col>

      </Row>

    </Container>
  );
}

export default App;
