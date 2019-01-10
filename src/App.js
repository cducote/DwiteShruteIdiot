import React, { Component } from 'react';
import './App.css';
import dwight from './assets/dwight.png'
import dwightsound from './assets/Idiot.mp3'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const audio = new Audio(dwightsound) 

class App extends Component {
  render() {
    return (
      <Container>
        <img src={dwight} alt="ds" onClick={() => audio.play()} />
        <h1> PRESS ME</h1>
      </Container>
    );
  }
}

export default App;
