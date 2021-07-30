import React, { Component } from 'react';
import AddTask from '../AddTask';
import Description from '../Description';
import DueDatePiority from '../DueDatePiority';
import Add from '../Add';

class NewTask extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center mt-5 mb-5'>New Task</h2>
        <AddTask />
        <Description />
        <DueDatePiority />
        <Add />
      </div>
    );
  }
}

export default NewTask;
