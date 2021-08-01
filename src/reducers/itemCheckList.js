import * as types from '../constants/ActionTypes';

var initialState = [];

var findIndex = (lists, id) => {
  var result = -1;
  lists.forEach((list, index) => {
    if (list.id === id) {
      result = index;
    }
  });
  return result;
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_TASK:
      var id = action.id;
      var index = findIndex(state, id);
      if (index === -1) {
        var listCheck = {
          id: action.id,
        };
        state.push(listCheck);
      } else {
        state.splice(index, 1);
      }
      return [...state];
    // case types.ADD_CHECK_TASK:
    //   var listCheck = {
    //     id: action.id,
    //   };
    //   state.push(listCheck);
    //   return [...state];
    // case types.REMOVE_CHECK_TASK:
    //   var id = action.id;
    //   var index = findIndex(state, id);
    //   state.splice(index, 1);
    //   return [...state];
    case types.CLEAR_lIST:
      state = [];
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
