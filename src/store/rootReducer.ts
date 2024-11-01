import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
	users: userReducer,
});

export default rootReducer;
