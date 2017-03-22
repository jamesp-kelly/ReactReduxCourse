import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';


export default function courseReducer(courseState = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...courseState,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...courseState.filter(course => course.id !== actions.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return courseState;
  }
}
