import { UserType } from '../type';
import { UserAction } from './actions';
import { UserActionTypes } from './types';

const initUsersState: UserType = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	photo: '',
	password: '',
	isActive: false,
	role: '',
	dateOfBirth: '',
	address: '',
	specialization: '',
	errors: '',
	pending: false,
	isAuth: !!localStorage.getItem('token'),
};

export function userReducer(state = initUsersState, action: UserAction) {
	switch (action.type) {
		case UserActionTypes.REGISTER_USER: {
			return { ...state, pending: true };
		}
		case UserActionTypes.REGISTER_USER_SUCCESS: {
			return { ...action.payload, pending: false, isAuth: true };
		}
		case UserActionTypes.REGISTER_USER_ERROR: {
			return { ...state, errors: action.payload, pending: false };
		}
		case UserActionTypes.LOGIN_USER: {
			return { ...state, pending: true };
		}
		case UserActionTypes.LOGIN_USER_SUCCESS: {
			return { ...action.payload, pending: false, isAuth: true };
		}
		case UserActionTypes.LOGIN_USER_ERROR: {
			return { ...state, errors: action.payload, pending: false };
		}
		case UserActionTypes.SET_ROLE: {
			return { ...state, role: action.payload };
		}
		default:
			return state;
	}
}
