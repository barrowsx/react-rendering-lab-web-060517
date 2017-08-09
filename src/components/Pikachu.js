import React from 'react';

class Pikachu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      size: 100
    };
  }

  resizePikachu = () => {
    const pikachu = document.getElementById("pikachu");
    pikachu.height = this.state.size;
    pikachu.width = this.state.size;
  }

  makeBigger = () => {
    this.setState({
      size: Math.pow(this.state.size, 2)
    });
  }

  makeSmaller = () => {
    this.setState({
      size: Math.sqrt(this.state.size, 2)
    });
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.state.size)
    this.resizePikachu()
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger!</button>
        <button onClick={this.makeSmaller}>Smaller!</button>
      </div>
    )
  }
}

export default Pikachu;
