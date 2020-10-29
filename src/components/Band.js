import React, { Component } from 'react';

class Band extends Component {

  handleClick = (event) => {
    event.preventDefault()
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <li key={this.props.id}>
        {this.props.name}
        <button onClick={(event) => this.handleClick(event)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
 