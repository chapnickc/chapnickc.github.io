import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu.js';
import Welcome from './components/Welcome.js';


function App() 
{

  return (
    <Container fluid className="App mt-5 mb-5">
      <Row>
        <Col md={{span: 3, offset: 2}}> 
          <Menu/> 
        </Col>
        <Col md={{span: 5, offset: 0}} className="App-main-content">
          <Welcome/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
