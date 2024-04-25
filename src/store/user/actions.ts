import { UserType } from '../type';
import { UserActionTypes } from './types';

interface LoginUser {
	type: UserActionTypes.LOGIN_USER;
	payload: UserType;
}

interface LoginUserSuccess {
	type: UserActionTypes.LOGIN_USER_SUCCESS;
	payload: UserType;
}
interface LoginUserError {
	type: UserActionTypes.LOGIN_USER_ERROR;
	payload: any;
}

interface SetRole {
	type: UserActionTypes.SET_ROLE;
	payload: string;
}

interface RegisterUser {
	type: UserActionTypes.REGISTER_USER;
	payload: UserType;
}

interface RegisterUserSuccess {
	type: UserActionTypes.REGISTER_USER_SUCCESS;
	payload: UserType;
}
interface RegisterUserError {
	type: UserActionTypes.REGISTER_USER_ERROR;
	payload: any;
}
export type UserAction =
	| LoginUser
	| LoginUserSuccess
	| LoginUserError
	| SetRole
	| RegisterUser
	| RegisterUserSuccess
	| RegisterUserError;
