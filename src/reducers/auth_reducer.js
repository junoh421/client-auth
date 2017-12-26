export default function(state = {}, action) {
  switch(action.type) {
    case 'AUTH_USER':
      return { ...state, authenticated: true }
    case 'UNAUTH_USER':
      // eslint-disable-next-line
      return { ... state, authenticated: false }
    case 'AUTH_ERROR':
      // eslint-disable-next-line
      return { ... state, error: action.payload }
  default:
    return state
  }
}
