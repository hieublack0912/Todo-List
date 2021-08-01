import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Bulk extends Component {
  render() {
    return (
      <div className='bulk'>
        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-8 pl-0 border border-dark'>
            <div className='d-flex justify-content-between pt-2 pb-2'>
              <div className='d-flex'>
                <p className='mt-3 mb-3 pl-3 text-task'>Bulk Action:</p>
              </div>
              <div className='m-3'>
                <button
                  type='button'
                  className='btn btn-primary mr-3 pl-5 pr-5 pt-2 pb-2'>
                  Done
                </button>
                <button
                  type='button'
                  className='btn btn-danger ml-3 pl-5 pr-5 pt-2 pb-2'
                  onClick={this.onDeleteListTask}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onDeleteListTask= () => {
    this.props.onRemoveList(this.props.listTasks);
    this.props.onClearList(this.props.listTasks);
  }
}

const mapStateToProps = (state) => {
  return {
    listTasks: state.itemCheckList,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRemoveList: (list) => {
      dispatch(actions.removeListTask(list));
    },
    onClearList: () => {
      dispatch(actions.clearList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bulk);
