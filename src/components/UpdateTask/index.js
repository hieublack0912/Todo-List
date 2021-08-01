import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class UpdateTask extends Component {

  componentWillMount() {
    if (this.props.itemEdit && this.props.itemEdit.id !== null) {
      this.setState({
        id: this.props.itemEdit.id,
        name: this.props.itemEdit.name,
        description: this.props.itemEdit.description,
        date: this.props.itemEdit.date,
        piotity: this.props.itemEdit.piotity,
      });
    } else {
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEdit) {
      this.setState({
        id: nextProps.itemEdit.id,
        name: nextProps.itemEdit.name,
        description: nextProps.itemEdit.description,
        date: nextProps.itemEdit.date,
        piotity: nextProps.itemEdit.piotity,
      });
    } else {
      this.onClear();
    }
  }

  render() {
    return (
      <div className='container border border-dark border-top-0'>
        <form onSubmit={this.onSave}>
          <div className='pt-3 pb-3 input-group'>
            <input
              type='text'
              className='form-control'
              value={this.state.name}
              onChange={this.onChangeEdit}
              name='name'
            />
          </div>
          <h5>Description</h5>
          <textarea
            rows='7'
            className='form-control border border-dark rounded-0'
            value={this.state.description}
            onChange={this.onChangeEdit}
            name='description'
          />
          <div className='pt-3 pb-3 row'>
            <div className='col-sm-6'>
              <h5>Due Date</h5>
              <input
                className='form-control border border-dark rounded-0'
                type='date'
                value={this.state.date}
                onChange={this.onChangeEdit}
                name='date'
              />
            </div>
            <div className='col-sm-6'>
              <h5>Piority</h5>
              <select
                className='form-control border border-dark rounded-0'
                defaultValue={this.state.piotity}
                onChange={this.onChangeEdit}
                name='piotity'>
                <option value='1'>Low</option>
                <option value='2'>Normal</option>
                <option value='3'>Hight</option>
              </select>
            </div>
          </div>
          <div className='pb-3'>
            <button type='submit' className='form-control btn btn-success'>
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }

  onClear = () => {
    this.setState({
      id: '',
    });
  };

  onChangeEdit = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.props.onRemoveDetail();
  };
}

const mapStateToProps = (state) => {
  return {
    itemEdit: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.updateTask(task));
    },
    onRemoveDetail: () => {
      dispatch(actions.removeDetail());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask);
