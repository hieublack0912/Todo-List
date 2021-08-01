import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      date: this.dateNow(),
      piotity: 2,
    };
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.onHandleSubmit}>
          <h2 className='text-center mt-4 mb-5'>New Task</h2>
          <div className='pt-5 pb-4 input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Add new task ...'
              name='name'
              onChange={this.onChange}
            />
          </div>
          <h5>Description</h5>
          <textarea
            rows='7'
            className='form-control border border-dark rounded-0'
            name='description'
            onChange={this.onChange}
          />
          <div className='pt-4 pb-5 row'>
            <div className='col-sm-6'>
              <h5>Due Date</h5>
              <input
                className='form-control border border-dark rounded-0'
                type='date'
                defaultValue={this.dateNow()}
                min={this.dateNow()}
                name='date'
                onChange={this.onChange}
              />
            </div>
            <div className='col-sm-6'>
              <h5>Piority</h5>
              <select
                className='form-control border border-dark rounded-0'
                defaultValue='2'
                onChange={this.onChange}
                name='piotity'>
                <option value='1'>Low</option>
                <option value='2'>Normal</option>
                <option value='3'>Hight</option>
              </select>
            </div>
          </div>
          <div className='pt-5'>
            <button type='submit' className='form-control btn btn-success'>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  dateNow = () => {
    var date = new Date();
    if ((date.getMonth() + 1).valueOf() > 10 && date.getDate() > 10) {
      var today =
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    } else if ((date.getMonth() + 1).valueOf < 10 && date.getDate() > 10) {
      today =
        date.getFullYear() +
        '-0' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate();
    } else if ((date.getMonth() + 1).valueOf > 10 && date.getDate() < 10) {
      today =
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-0' +
        date.getDate();
    } else {
      today =
        date.getFullYear() +
        '-0' +
        (date.getMonth() + 1) +
        '-0' +
        date.getDate();
    }
    return today;
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
  };
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
