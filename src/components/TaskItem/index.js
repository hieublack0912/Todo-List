import React, { Component } from 'react';
import './index.css';
import UpdateTask from '../UpdateTask';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  render() {
    var { task, itemEdit, CheckLists } = this.props;
    return (
      <div className='mt-4'>
        <div className='border border-dark d-flex justify-content-between'>
          <div className='d-flex'>
            <input type='checkbox' className='m-3 check-box' onChange={this.onChecked} name='check' checked={CheckLists.length > 0 ? this.state.checked : false} />
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
        {itemEdit === null || task.id === itemEdit.id ? <UpdateTask /> : ''}
      </div>
    );
  }

  onChecked = (e) => {
    var target = e.target;
    var value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        checked: value
      });
    this.props.onCheckTask(this.props.task.id);
  }

  onToggleDetail = () => {
    this.props.onToggleDetail(this.props.task);
    if (this.props.itemEdit.id && this.props.task.id === this.props.itemEdit.id) {
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
    CheckLists: state.itemCheckList
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
    onCheckTask: (id) => {
      dispatch(actions.checkTask(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
