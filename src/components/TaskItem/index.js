import React, { Component } from 'react';
import './index.css';
import UpdateTask from '../UpdateTask';

class TaskItem extends Component {
  render() {
    return (
      <div className='mt-4'>
        <div className='border border-dark d-flex justify-content-between'>
          <div className='d-flex'>
            <input type='checkbox' className='m-3 check-box' />
            <p className='mt-3 mb-3 pl-3 text-task'>Do HomeWork</p>
          </div>
          <div className='m-3'>
            <button type='button' class='btn btn-info mr-3 pl-5 pr-5'>
              Detail
            </button>
            <button type='button' class='btn btn-danger ml-3 pl-4 pr-4'>
              Remove
            </button>
          </div>
        </div>
        <UpdateTask />
      </div>
    );
  }
}

export default TaskItem;
