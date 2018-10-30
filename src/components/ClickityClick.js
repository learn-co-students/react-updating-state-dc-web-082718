// Code ClickityClick Component Here

import React, {Component} from 'react'

export default class ClickityClick extends Component {
  constructor() {
    super()
    this.state = {
      hadBeenClicked: false
    }
  }
  handleClick = () => {
    this.setState({hasBeenClicked: !(this.hasBeenClicked)})
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}
