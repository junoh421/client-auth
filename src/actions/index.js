export function selectUser(user) {
  return {
    type: 'SELECTED_USER',
    payload: user
  };
}

export function fetchUserContents() {
  return {
    type: 'FETCH_USER_CONTENTS',
    payload: [
      {id: 1, likes: '10', posts: '10' },
      {id: 2, likes: '13', posts: '15' },
      {id: 3, likes: '16', posts: '17' }
    ]
  };
};
