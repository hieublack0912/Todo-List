import React, { Component } from 'react';

class UpdateTask extends Component {
  render() {
    return (
      <div className='container border border-dark border-top-0'>
        <div className='pt-5 pb-4 input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Add new task ...'
          />
        </div>
        <h5>Description</h5>
        <textarea
          rows='7'
          className='form-control border border-dark rounded-0'></textarea>
        <div className='pt-3 pb-5 row'>
          <div className='col-sm-6'>
            <h5>Due Date</h5>
            <input
              className='form-control border border-dark rounded-0'
              type='date'
            />
          </div>
          <div className='col-sm-6'>
            <h5>Piority</h5>
            <select
              className='form-control border border-dark rounded-0'
              defaultValue='2'>
              <option value='1'>Low</option>
              <option value='2'>Normal</option>
              <option value='3'>Hight</option>
            </select>
          </div>
        </div>
        <div className='pb-3'>
          <button type='button' className='form-control btn btn-success'>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default UpdateTask;
