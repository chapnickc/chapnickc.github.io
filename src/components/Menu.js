import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Menu extends React.Component {
  render() {
    return (
    <Card className="Menu">
      <Card.Body> 
        <Link to="/" className="Menu-full-name">Chad Chapnick</Link>
      </Card.Body>

      <ListGroup variant="flush" className="Menu-list">

        <ListGroup.Item>
          <Link to="/projects" className="Menu-item">Projects</Link> 
          <Card.Text className="text-muted"> 
            That might interest you
          </Card.Text>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to="/papers" className="Menu-item">Papers</Link>
          <Card.Text className="text-muted">
            That are out there
          </Card.Text>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to="/photos" className="Menu-item">Photos</Link>
          <Card.Text className="text-muted">
            Something to ease the eyes
          </Card.Text>
        </ListGroup.Item>

        <ListGroup.Item>
          <Card.Link 
          href="https://s3.amazonaws.com/chapnickc.github.io/Chad_Chapnick_Resume_2020_27_03.pdf" 
          target="_blank" 
          className="Menu-item">
          Résumé
        </Card.Link>
      </ListGroup.Item>

    </ListGroup>

    <Card.Body>
      <Card.Link 
      className="Menu-item"
      href="https://github.com/chapnickc" 
      target="_blank">
        Github
      </Card.Link>
      <Card.Link 
      className="Menu-item"
      href="https://www.linkedin.com/in/chapnickc" 
      target="_blank">
        Linked In
      </Card.Link>
    </Card.Body>

    <Card.Footer className="text-muted">
      Made with React <img src={logo} className="App-logo" alt="logo"/> 
    </Card.Footer>

  </Card>);
  }
};
