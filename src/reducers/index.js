import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses: courses, //could also use es6 shorthand property names
  authors: authors
});

export default rootReducer;
