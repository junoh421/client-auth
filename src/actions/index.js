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
  const ROOT_URL = 'http://localhost:3090';

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

export const signUpUser = ({ email, password, userName, fullName }, history) => {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password, userName, fullName})
    .then( response => {
      dispatch({ type: 'AUTH_USER' });
      localStorage.setItem('token', response.data.token);

      history.push('/')
    })
    .catch( response => {
      dispatch(authError(response.response.data.error))
    })
  }
}

export const signOutUser = () => {
  localStorage.removeItem('token');

  return {
    type: 'UNAUTH_USER'
  }

}

export const authError = (error) => {
  return {
    type: 'AUTH_ERROR',
    payload: error
  }
}


export const goToDashboard = () => {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/dashboard`, {
      headers: { authorization: localStorage.getItem('token')}
    })
  }
}
