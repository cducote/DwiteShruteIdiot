import React, { Component } from 'react';
import './App.css';
import dwight from './assets/d.png'
import dwightsound from './assets/newidiot.mov'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffdb58;
  @media screen and (max-width: 480px) {
    img {
         width: 300px;
    }
}
`

const audio = new Audio(dwightsound) 

class App extends Component {
  render() {
    return (
      <Container>
        <img src={dwight} alt="ds" onClick={() => audio.play()} />
      </Container>
    );
  }
}

export default App;
