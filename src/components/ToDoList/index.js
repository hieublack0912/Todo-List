import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Bulk from '../Bulk';
import TaskItem from '../TaskItem';
import './index.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
    };
  }

  render() {
    var { tasks, listChecks, filter } = this.props;
    console.log(filter);
    if (filter.name) {
      tasks = tasks.filter((task) => {
        return (
          task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
        );
      });
    }
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={index} task={task} />;
    });
    return (
      <div className='todolist'>
        <div className='container'>
          <h2 className='text-center mt-4 mb-5'>To Do List</h2>
          <div className='pt-5 input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Seach ...'
              name='filterName'
              onChange={this.onChange}
            />
          </div>
          {elmTasks}
          <div className='bot-no-index'></div>
        </div>
        {listChecks.length > 0 ? <Bulk /> : ''}
      </div>
    );
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
    };
    this.props.onFilterName(filter);
    this.setState({
      [name]: value,
    });
  };
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    listChecks: state.itemCheckList,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterName: (filter) => {
      dispatch(actions.filterName(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
