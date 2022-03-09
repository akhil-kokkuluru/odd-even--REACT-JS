import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  numberClick = () => {
    this.setState(op => ({count: op.count + Math.floor(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state
    let value
    if (count % 2 === 0) {
      value = 'Even'
    } else {
      value = 'Odd'
    }
    return (
      <div className="gradBG">
        <div>
          <h1>Count {count}</h1>
          <p className="abovetext">Count is {value}</p>
          <button type="button" className="buttons" onClick={this.numberClick}>
            Increment
          </button>
          <p className="belowtext">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
