import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Project from './Project.js';

export default class Projects extends React.Component {

  render(){

    return (
      <Container className="Projects">
        <h1>Projects</h1>

        <Project 
        title="ARM Embedded Project (nRF51)" 
        fname="nRF51-Firmware.md" 
        image="ble-nano.jpg"/>

       <Project 
        title="Edge-Based Segmentation"
        fname="Edge-Detection.md" 
        image="edges.png"/>

       <Project 
        title="Echo Removal System"
        fname="EchoRemoval-System.md" 
        image="echoremoval.jpg"/>

       <Project 
        title="iOS BLE Monitor" 
        fname="iOS-BLE-Monitor.md" 
        image="iosnav.jpg"/>

        <Project 
        title="High Perfomance Computing Tutorial" 
        fname="HPC-Tutorial.md" 
        image="HPC_submitjobs.jpg"/>

        <Project 
        title="Life Expectancy Analysis" 
        fname="LifeExpectancyAnalysis.md" 
        image="LifeExpectancy_prediction.jpg"/>

     </Container>
    );
  }
};
