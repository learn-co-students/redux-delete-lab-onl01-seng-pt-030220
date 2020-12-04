import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    )
  }

  // render() {
  //   console.log(this.props + "Display and Delete") 
  //   return(
  //     <div>
  //       {/* Band Component */}
  //       <li key={this.props.band.id}>
          
  //         <span>{this.props.band.name}</span>
          
  //         <button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button>
        
  //       </li>
  //     </div>
  //   );
  // }
};

export default Band;
