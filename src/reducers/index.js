import { combineReducers } from 'redux';
import tasks from './tasks';

const appReducers = combineReducers({
    tasks
});

export default appReducers;