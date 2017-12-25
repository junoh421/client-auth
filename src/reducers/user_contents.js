export default function(state = [], action) {
  debugger;
  switch (action.type) {
    case 'FETCH_USER_CONTENTS':
      // Take in initial state of users along with new user
      return [ ...state, ...action.payload ];
    default:
      return state
  }
}
