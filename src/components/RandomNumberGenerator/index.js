import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generate = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
