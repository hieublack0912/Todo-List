import React, { Component } from 'react';

class Piority extends Component {
  render() {
    return (
      <div>
        <h5>Piority</h5>
        <select className='form-control border border-dark rounded-0' defaultValue='2'>
          <option value='1'>Low</option>
          <option value='2'>Normal</option>
          <option value='3'>Hight</option>
        </select>
      </div>
    );
  }
}

export default Piority;
