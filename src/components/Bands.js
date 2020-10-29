import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <div>
          <ul>
            {this.props.bands.map(band => <Band key={band.id} name={band.name} id={band.id} deleteBand={this.props.deleteBand}/>)}
        </ul>
      </div>
    );
  }
};

export default Bands;
 