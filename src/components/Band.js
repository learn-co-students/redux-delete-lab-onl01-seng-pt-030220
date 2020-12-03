import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        {/* Band Component */}
        <li key={this.props.band.id}>
          
          {this.props.band.name}
          
          <button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button>
        
        </li>
      </div>
    );
  }
};

export default Band;
