import React, { Component } from 'react';

class DueDate extends Component {

  dateNow = () => {
    var date = new Date();
    if((date.getMonth()+1).valueOf < 10) {
      var today = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    } else {
      today = date.getFullYear() + '-0' + (date.getMonth()+1) + '-' + date.getDate();
    }
    return today;
  }

  render() {
    return (
      <div>
        <h5>Due Date</h5>
        <input className='form-control border border-dark rounded-0' type="date" defaultValue={this.dateNow()} min={this.dateNow()}/>
      </div>
    );
  }
}

export default DueDate;
