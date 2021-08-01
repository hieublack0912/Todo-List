import React, { Component } from 'react';
import './index.css';
import UpdateTask from '../UpdateTask';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class TaskItem extends Component {
  render() {
    var { task, itemEdit } = this.props;
    return (
      <div className='mt-4'>
        <div className='border border-dark d-flex justify-content-between'>
          <div className='d-flex'>
            <input type='checkbox' className='m-3 check-box' />
            <p className='mt-3 mb-3 pl-3 text-task'>{task.name}</p>
          </div>
          <div className='m-3'>
            <button
              type='button'
              className='btn btn-info mr-3 pl-5 pr-5'
              onClick={this.onToggleDetail}>
              Detail
            </button>
            <button
              type='button'
              className='btn btn-danger ml-3 pl-4 pr-4'
              onClick={this.onDeleteTask}>
              Remove
            </button>
          </div>
        </div>
        {this.state != null || task.id === itemEdit.id ? <UpdateTask /> : ''}
      </div>
    );
  }

  onToggleDetail = () => {
    this.props.onToggleDetail(this.props.task);
    if (this.props.itemEdit.id) {
      this.props.onRemoveDetail();
    }
  };

  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
  };
}

const mapStateToProps = (state) => {
  return {
    itemEdit: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleDetail: (task) => {
      dispatch(actions.toggleDetail(task));
    },
    onRemoveDetail: () => {
      dispatch(actions.removeDetail());
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
