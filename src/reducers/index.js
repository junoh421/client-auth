import { combineReducers } from 'redux';
import MatchingUser from './reducer_matching_user';
import Users from './reducer_users';

const rootReducer = combineReducers({
	users: Users,
    matchingUser: MatchingUser
});

export default rootReducer;
