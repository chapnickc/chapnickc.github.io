import React from 'react';
import Card from 'react-bootstrap/Card';

export default class Welcome extends React.Component {

  render(){
    //let photo  =<Image  className="Profile-image" src={"img/"+"profile.jpg"} alt="logo"  roundedCircle/> ;
    let photo = null;
    return (
      <Card className="Main">
        <Card.Body>
          <Card.Title className="Main-title">Welcome</Card.Title> 
          <Card.Text>
            It's Chad, I am glad you found my page.

            {photo}

            <br /><br />

            Currently I am a software engineer at Cadre Forensics,
            building systems for handling sensitive information in Python / C++.

            <br /><br />

            Please feel free to look around and help yourself if you find 
            anything useful.

          </Card.Text>

        </Card.Body>
      </Card>
      );
  }

};
