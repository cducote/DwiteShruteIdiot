import React, { Component } from 'react';
import dwight from './assets/d.png'
import mike from './assets/mikeScott.png'
import andy from './assets/andyBernard.png'
import dwightsound from './assets/dwitesound.mov'
import andySound from './assets/andysound.mp4'
import mikeSound from './assets/mikesound.mp4'
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
const Navbar = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #ffdb58;
  @media screen and (max-width: 480px) {
    img {
         width: 300px;
    }
}
`

const audio1 = new Audio(dwightsound) 
const audio2 = new Audio(mikeSound)
const audio3 = new Audio(andySound)

class App extends Component {
  state = {
    dwiteSelected: false,
    parkourSelected: false,
    andySelected: false
  }

  handleDwight = async () => {
    this.setState({ dwiteSelected:true })
    this.setState({ parkourSelected: false })
    this.setState({ andySelected: false })
  }
  handleMike = async () => {
    this.setState({ dwiteSelected: false })
    this.setState({ parkourSelected: true })
    this.setState({ andySelected: false })
  }
  handleAndy = async () => {
    this.setState({ dwiteSelected: false })
    this.setState({ parkourSelected: false })
    this.setState({ andySelected: true })
  }
  
  render() {
    const dwiteSelected = this.state.dwiteSelected
    const parkourSelected = this.state.parkourSelected
    const andySelected = this.state.andySelected
    let head;
    if (dwiteSelected) {
      head = <Container>
              <img src={dwight} alt="x" height="400px" onClick={() => audio1.play()} />
             </Container>
    } else if (parkourSelected) { 
      head = <Container>
                <img src={mike} alt="x" onClick={() => audio2.play()} />
              </Container>
    } else if (andySelected) { 
      head = <Container>
                <img src={andy} height="500px"alt="x" onClick={() => audio3.play()} />
              </Container>
    } else {
      head = <Container>
          <h1> Select a head! :) </h1>
      </Container>
    }
    return (
      <div>
      <Navbar>
        {dwiteSelected ? (
          null
        ) : (
          <img src={dwight} alt='x' height='125px' onClick={this.handleDwight}/>
        )}
        {parkourSelected ? (
          null
        ) : (
          <img src={mike} alt='x' height='150' onClick={this.handleMike}/>
        )}
        {andySelected ? (
          null
        ) : (
          <img src={andy} alt='x' height='150' onClick={this.handleAndy}/>
        )}
      </Navbar>
        {head}
      </div>
    );
  }
}

export default App;
