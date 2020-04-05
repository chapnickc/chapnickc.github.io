import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Menu from './components/Menu.js';
import Welcome from './components/Welcome.js';
import Projects from './components/Projects.js';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App()
{
  document.title='chapnickc.github.io';

  return (
    <Router>

      <Container fluid className="App mt-5 mb-5">
        <Row>

          <Col md={{span: 3, offset: 2}}> 
            <Menu/> 
          </Col>

          <Col md={{span: 6, offset: 0}} className="App-main-content">
            <Switch>
              <Route path="//">
                <Welcome />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>

            </Switch>
          </Col>

        </Row>
      </Container>

    </Router>

    );
}

