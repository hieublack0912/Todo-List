import React, { Component } from 'react';

class NewTask extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='text-center mt-4 mb-5'>New Task</h2>
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
        <div className='pt-4 pb-5 row'>
          <div className='col-sm-6'>
            <h5>Due Date</h5>
            <input
              className='form-control border border-dark rounded-0'
              type='date'
              defaultValue={this.dateNow()}
              min={this.dateNow()}
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
        <div className='pt-5'>
          <button type='button' className='form-control btn btn-success'>
            Add
          </button>
        </div>
      </div>
    );
  }

  dateNow = () => {
    var date = new Date();
    if ((date.getMonth() + 1).valueOf < 10) {
      var today =
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    } else {
      today =
        date.getFullYear() +
        '-0' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate();
    }
    return today;
  };
}

export default NewTask;
