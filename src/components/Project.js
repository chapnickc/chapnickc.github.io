import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import marked from 'marked';

export default class Project extends React.Component {
  constructor(props) {
    super(props)
    this.title=props.title;
    this.fname=props.fname;
    this.image=props.image;
    this.cutoff = 10;
    this.state = { 
      markdown: null, 
      content: null,
      buttonText: "See more",
      showFullText: false,
      seeMoreEnabled: false
    }

    this.onSeeMore = this.onSeeMore.bind(this);
  }

  onSeeMore(){
    const { showFullText } =  this.state;
    const { markdown } =  this.state;

    let content = null;
    let buttonText =null;
    if (!showFullText){
      content = markdown;
      buttonText = "See Less";
    }
    else {
        buttonText = "See More";
        var parts = markdown.split('\n');
        if (parts.length > this.cutoff){
          content = parts.slice(0, this.cutoff).join('\n');
        }
    }
    this.setState({
        content: content,
        buttonText: buttonText,
        showFullText: !showFullText
    })
}

  componentDidMount(){
    const f = require("../projects/" + this.fname);
    fetch(f)
      .then(response => {
        return response.text()
      })
      .then(text => {
        let md = marked(text) 
        var parts = md.split('\n');
        let content = md;
        if (parts.length > this.cutoff){
          content = parts.slice(0, this.cutoff).join('\n');
        }
        this.setState({ 
          markdown: md,
          content: content,
          seeMoreEnabled: parts.length > this.cutoff
        })
      })
  }

  render(){

    let button = null;
    if (this.state.seeMoreEnabled)
      button = (
      <Button  variant="dark" className="float-right" onClick={() => this.onSeeMore()} >
          {this.state.buttonText}
        </Button>);

    let img = null;
    if (this.image && this.image.length > 0){
      img = <img className="Project-image" src={"img/"+this.image} alt="logo"/>
    }

    return (
      <Card className="Main">
        <Card.Body>
          <Card.Title>{this.title}</Card.Title>
          {img}
          <p dangerouslySetInnerHTML={{__html: this.state.content}}></p>
        {button}
        </Card.Body>
      </Card>
      );
  }

};
