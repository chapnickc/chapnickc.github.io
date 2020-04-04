import React from 'react';
import Card from 'react-bootstrap/Card';
import marked from 'marked';

export default class Project extends React.Component {
   constructor(props) {
     super(props)
     this.title=props.title;
     this.fname=props.fname;
     this.image=props.image;
     this.state = { markdown: null }
  }

  componentDidMount(){
    const content = require("../projects/" + this.fname);
        fetch(content)
        .then(response => {
          return response.text()
        })
        .then(text => {
          this.setState({
            markdown: marked(text)
          })
        })


  }


  render(){
    const { markdown } = this.state;

    return (
      <Card className="Main">
        <Card.Body>
          <Card.Title>{this.title}</Card.Title>
          <img className="Project-image" src={"img/"+this.image} alt="logo"/> 
          <section>
            <article dangerouslySetInnerHTML={{__html: markdown}}></article>
          </section>
        </Card.Body>
      </Card>
      );
  }

};
