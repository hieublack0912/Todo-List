import { combineReducers } from 'redux';
import tasks from './tasks';
import itemEditing from './itemEditing';
import itemCheckList from './itemCheckList';
import filter from './filter';

const appReducers = combineReducers({
    tasks,
    itemEditing,
    itemCheckList,
    filter
});

export default appReducers;