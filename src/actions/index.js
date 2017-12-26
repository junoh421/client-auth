import axios from 'axios';


const ROOT_URL = 'http://localhost:3090';

export const selectUser = (user) => {
  return {
    type: 'SELECTED_USER',
    payload: user
  };
}

export const fetchUserContents = () => {
  return {
    type: 'FETCH_USER_CONTENTS',
    payload: [
    ]
  };
};

export const signInUser = ({ email, password }, history) => {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then( response => {
      dispatch({ type: 'AUTH_USER' });
      localStorage.setItem('token', response.data.token);

      history.push('/')
    })
    .catch( response => {
      dispatch(authError("Incorrect email or password"))

    })
  }
}


export const authError = (error) => {
  return {
    type: 'AUTH_ERROR',
    payload: error
  }
}
