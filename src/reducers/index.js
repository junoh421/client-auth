import { combineReducers } from 'redux';
import MatchingUser from './reducer_matching_user';
import Users from './reducer_users';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	users: Users,
    matchingUser: MatchingUser,
    form: formReducer
});

export default rootReducer;
