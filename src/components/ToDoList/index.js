import React, { Component } from 'react';
import TaskItem from '../TaskItem';

class TodoList extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='text-center mt-4 mb-5'>To Do List</h2>
        <div className='pt-5 input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Seach ...'
          />
        </div>
        <TaskItem />
        <TaskItem />
      </div>
    );
  }
}

export default TodoList;
