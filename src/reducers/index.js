import { combineReducers } from 'redux';
import tasks from './tasks';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    tasks,
    itemEditing
});

export default appReducers;