import * as types from '../constants/ActionTypes';

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task,
  };
};

export const toggleDetail = (task) => {
  return {
    type: types.DETAIL_TASK,
    task,
  };
};

export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task,
  };
};

export const removeDetail = () => {
  return {
    type: types.REMOVE_DETAIL,
  };
};

export const checkTask = (id) => {
  return {
    type: types.CHECK_TASK,
    id,
  };
};

export const removeListTask = (list) => {
  return {
    type: types.REMOVE_LIST_TASK,
    list,
  };
};

export const clearList = () => {
  return {
    type: types.CLEAR_lIST,
  };
};

export const filterName = (keyword) => {
  return {
    type: types.FILTER,
    keyword
  };
};
