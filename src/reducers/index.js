import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses: courses //could also use es6 shorthand property names
});

export default rootReducer;
