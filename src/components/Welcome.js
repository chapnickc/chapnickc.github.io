import React from 'react';
import Card from 'react-bootstrap/Card';

export default class Welcome extends React.Component {
  render(){
    return (
      <Card className="Main">
        <Card.Body>
          <Card.Title className="Main-title">Welcome</Card.Title> 

            I'm glad you found my page. Please feel free to look around.

						<br />
						<br />

            Current Role: <b>Software Engineer, Cadre Forensics</b>
          </Card.Body>
      </Card>
    );
  }

};
