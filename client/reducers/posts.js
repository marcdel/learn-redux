export default function posts(state = [], action){
  // Deep clone.
  // var newState = Object.assign({}, state);

  switch(action.type){
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}
