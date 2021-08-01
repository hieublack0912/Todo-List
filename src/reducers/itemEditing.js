import * as types from '../constants/ActionTypes';

var initialState = {};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DETAIL_TASK:
      return action.task;
    case types.REMOVE_DETAIL:
      state =[];
      return state;
    default:
      return state;
  }
};

export default myReducer;
