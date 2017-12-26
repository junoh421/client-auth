import { combineReducers } from 'redux';
import MatchingUser from './reducer_matching_user';
import Users from './reducer_users';
import { reducer as formReducer } from 'redux-form';
import userContents from './user_contents';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
	users: Users,
    matchingUser: MatchingUser,
    form: formReducer,
    userContents: userContents,
    auth: authReducer
});

export default rootReducer;
