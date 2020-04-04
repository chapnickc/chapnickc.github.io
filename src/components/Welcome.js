import React from 'react';
import Card from 'react-bootstrap/Card';

export default class Welcome extends React.Component {
  render(){
    return (
      <Card>
        <Card.Body>
          <Card.Title className="Card-title">Welcome</Card.Title> 

            I'm glad you found my page. Please feel free to look around.

            Current Role: <i>Software Engineer at Cadre Forensics</i>
          </Card.Body>
      </Card>
    );
  }

};
