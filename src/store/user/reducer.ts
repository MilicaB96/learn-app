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
	generatedPassword: '',
	isActive: false,
	role: '',
	dateOfBirth: '',
	address: '',
	specialization: '',
	errors: '',
	pending: false,
	isAuth: !!localStorage.getItem('token'),
	flag: false,
	specializations: [],
	myTrainers: [],
	myStudents: [],
	allTrainers: [],
};

export function userReducer(state = initUsersState, action: UserAction) {
	switch (action.type) {
		case UserActionTypes.REGISTER_USER: {
			return { ...state, pending: true };
		}
		case UserActionTypes.REGISTER_USER_SUCCESS: {
			return {
				...state,
				...action.payload,
				generatedPassword: action.payload.password,
				pending: false,
				flag: true,
				isAuth: true,
				errors: '',
			};
		}
		case UserActionTypes.REGISTER_USER_ERROR: {
			return { ...state, errors: action.payload, pending: false };
		}
		case UserActionTypes.LOGIN_USER: {
			return { ...state, pending: true };
		}
		case UserActionTypes.LOGIN_USER_SUCCESS: {
			return { ...action.payload, pending: false, isAuth: true, errors: '' };
		}
		case UserActionTypes.LOGIN_USER_ERROR: {
			return { ...state, errors: action.payload, pending: false };
		}
		case UserActionTypes.SET_ROLE: {
			return { ...state, role: action.payload };
		}
		case UserActionTypes.GET_USER_SUCCESS: {
			return { ...state, ...action.payload, isAuth: true, error: '' };
		}
		case UserActionTypes.GET_USER_ERROR: {
			return { ...state, errors: action.payload };
		}
		case UserActionTypes.LOGOUT_USER_SUCCESS: {
			return { ...initUsersState, isAuth: false };
		}
		case UserActionTypes.GET_SPECIALIZATIONS_SUCCESS: {
			return { ...state, specializations: action.payload, flag: false };
		}
		case UserActionTypes.GET_MY_TRAINERS_SUCCESS: {
			return { ...state, myTrainers: action.payload, flag: false };
		}
		case UserActionTypes.GET_MY_STUDENTS_SUCCESS: {
			return { ...state, myStudents: action.payload, flag: false };
		}
		case UserActionTypes.CHANGE_PASSWORD: {
			return { ...state, flag: false, errors: '' };
		}
		case UserActionTypes.CHANGE_PASSWORD_SUCCESS: {
			return { ...initUsersState, isAuth: false, flag: true, errors: '' };
		}
		case UserActionTypes.CHANGE_PASSWORD_ERROR: {
			return { ...state, errors: action.payload };
		}
		case UserActionTypes.GET_ALL_TRAINERS_SUCCESS: {
			return { ...state, allTrainers: action.payload, errors: '' };
		}
		case UserActionTypes.GET_ALL_TRAINERS_ERROR: {
			return { ...state, errors: action.payload };
		}
		case UserActionTypes.ADD_TRAINERS_SUCCESS: {
			return {
				...state,
				errors: '',
				myTrainers: [...state.myTrainers, ...action.payload],
				allTrainers: state.allTrainers.filter(
					(item: any) => !action.payload.some((x) => x.id === item.id)
				),
			};
		}
		case UserActionTypes.ADD_TRAINERS_ERROR: {
			return { ...state, errors: action.payload };
		}
		case UserActionTypes.EDIT_USER_SUCCESS: {
			return { ...state, ...action.payload, errors: '', flag: true };
		}
		case UserActionTypes.EDIT_USER_ERROR: {
			return { ...state, errors: action.payload, flag: false };
		}
		case UserActionTypes.DELETE_USER_SUCCESS: {
			return { ...initUsersState, isAuth: false };
		}
		case UserActionTypes.DELETE_USER_ERROR: {
			return { ...state, errors: action.payload };
		}
		default:
			return state;
	}
}
