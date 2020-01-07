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

const audio1 = new Audio(dwightsound) 
// const audio2 = new Audio(mikeSound)
// const audio3 = new Audio(andySound)

class App extends Component {
  state = {
    dwiteSelected: false,
    parkourSelected: false,
    andySelected: false
  }
  
  render() {
    const dwiteSelected = this.state.dwiteSelected
    const parkourSelected = this.state.parkourSelected
    const andySelected = this.state.andySelected
    let head;
    if (dwiteSelected) {
      head = <Container>
              <img src={dwight} alt="ds" onClick={() => audio1.play()} />
             </Container>
    } else if (parkourSelected) { 
      head = <Container>
                {/* <img src={mike} alt="ds" onClick={() => audio2.play()} /> */}
              </Container>
    } else if (andySelected) { 
      head = <Container>
                {/* <img src={mike} alt="ds" onClick={() => audio3.play()} /> */}
              </Container>
    } else {
      head = <Container>
          <h1> Select a head! :) </h1>
      </Container>
    }
    return (
      <div>
        {head}
      </div>
    );
  }
}

export default App;
