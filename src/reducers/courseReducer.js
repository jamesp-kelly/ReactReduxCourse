export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      //debugger;
      return [...state, //spread operator
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
