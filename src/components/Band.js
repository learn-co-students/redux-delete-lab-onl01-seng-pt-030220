import React, { Component } from 'react';

class Band extends Component {

  render() {
   const{name,id}=this.props.band

    return(
     <div>
      <ul><li>{name}</li></ul>
      <button onClick={(e) =>{ 
         e.preventDefault()
       
        this.props.deleteBand(id)
      
      
      }}>DELETE</button>
    </div>

    );
  }
};

export default Band;
