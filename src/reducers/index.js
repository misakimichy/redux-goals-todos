import { combineReducers } from 'redux';

import todos from './todos';
import goals from './goals';
import loading from './loasing';

export default combineReducers({
    todos,
    goals,
    loading,
})
