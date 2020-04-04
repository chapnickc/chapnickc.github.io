import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from './Project.js';

export default class Projects extends React.Component {

  render(){

    return (
      <Container>
        <h1> Projects</h1>
        <Project 
        title="ARM Embedded Project (nRF51)" 
        fname="nRF51-Firmware.md" 
        image="ble-nano.jpg"/>
      </Container>
    );
  }
};
