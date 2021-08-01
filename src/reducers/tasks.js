import * as types from '../constants/ActionTypes';

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

var randomID = () => {
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};

var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

const tasks = (state = initialState, action) => {
  var id = '';
  var index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      if (!action.task.name) {
        return [...state];
      }
      var newTask = {
        id: randomID(),
        name: action.task.name,
        description: action.task.description,
        date: action.task.date,
        piotity: action.task.piotity,
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.UPDATE_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        description: action.task.description,
        date: action.task.date,
        piotity: action.task.piotity,
      };
      index = findIndex(state, task.id);
      state[index] = task;
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default tasks;
