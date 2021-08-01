import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    var { tasks } = this.props;
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={index} task={task}/>;
    });
    return (
      <div className='container'>
        <h2 className='text-center mt-4 mb-5'>To Do List</h2>
        <div className='pt-5 input-group'>
          <input type='text' className='form-control' placeholder='Seach ...' />
        </div>
        {elmTasks}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, null)(TodoList);
