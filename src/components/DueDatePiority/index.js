import React, { Component } from 'react';
import DueDate from '../DueDate';
import Piority from '../Piority';

class DueDatePiority extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {value: Date()};
  }
  render() {
    return (
      <div className='pt-5 pb-5 row'>
        <div className='col-sm-6'>
          <DueDate />
        </div>
        <div className='col-sm-6'>
          <Piority />
        </div>
      </div>
    );
  }
}

export default DueDatePiority;
