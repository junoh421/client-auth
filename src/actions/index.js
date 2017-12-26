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
      {id: 1, likes: '10', posts: '10' },
      {id: 2, likes: '13', posts: '15' },
      {id: 3, likes: '16', posts: '17' }
    ]
  };
};

export const signInUser = ({ email, password }, history) => {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then( response => {
      history.push('/')
    })
    .catch( response => {

    })
  }
}
