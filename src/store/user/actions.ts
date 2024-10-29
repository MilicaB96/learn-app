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

interface GetUser {
	type: UserActionTypes.GET_USER;
	payload: any;
}

interface GetUserSuccess {
	type: UserActionTypes.GET_USER_SUCCESS;
	payload: UserType;
}
interface GetUserError {
	type: UserActionTypes.GET_USER_ERROR;
	payload: any;
}

interface LogoutUser {
	type: UserActionTypes.LOGOUT_USER;
	payload: any;
}

interface LogoutUserSuccess {
	type: UserActionTypes.LOGOUT_USER_SUCCESS;
	payload: any;
}
interface GetSpecializations {
	type: UserActionTypes.GET_SPECIALIZATIONS;
	payload: null;
}
interface GetSpecializationsSuccess {
	type: UserActionTypes.GET_SPECIALIZATIONS_SUCCESS;
	payload: any;
}

interface GetMyTrainers {
	type: UserActionTypes.GET_MY_TRAINERS;
	payload: any;
}

interface GetMyTrainersSuccess {
	type: UserActionTypes.GET_MY_TRAINERS_SUCCESS;
	payload: UserType;
}

interface GetMyStudents {
	type: UserActionTypes.GET_MY_STUDENTS;
	payload: any;
}

interface GetMyStudentsSuccess {
	type: UserActionTypes.GET_MY_STUDENTS_SUCCESS;
	payload: UserType;
}

interface ChangePassword {
	type: UserActionTypes.CHANGE_PASSWORD;
	payload: any;
}

interface ChangePasswordSuccess {
	type: UserActionTypes.CHANGE_PASSWORD_SUCCESS;
	payload: string;
}
interface ChangePasswordError {
	type: UserActionTypes.CHANGE_PASSWORD_ERROR;
	payload: any;
}

interface GetAllTrainers {
	type: UserActionTypes.GET_ALL_TRAINERS;
	payload: null;
}

interface GetAllTrainersSuccess {
	type: UserActionTypes.GET_ALL_TRAINERS_SUCCESS;
	payload: any;
}

interface GetAllTrainersError {
	type: UserActionTypes.GET_ALL_TRAINERS_ERROR;
	payload: any;
}

interface AddTrainers {
	type: UserActionTypes.ADD_TRAINERS;
	payload: any;
}

interface AddTrainersSuccess {
	type: UserActionTypes.ADD_TRAINERS_SUCCESS;
	payload: Array<UserType>;
}

interface AddTrainersError {
	type: UserActionTypes.ADD_TRAINERS_ERROR;
	payload: any;
}

interface EditUser {
	type: UserActionTypes.EDIT_USER;
	payload: UserType;
}

interface EditUserSuccess {
	type: UserActionTypes.EDIT_USER_SUCCESS;
	payload: UserType;
}
interface EditUserError {
	type: UserActionTypes.EDIT_USER_ERROR;
	payload: any;
}

interface DeleteUser {
	type: UserActionTypes.DELETE_USER;
	payload: any;
}

interface DeleteUserSuccess {
	type: UserActionTypes.DELETE_USER_SUCCESS;
	payload: any;
}
interface DeleteUserError {
	type: UserActionTypes.DELETE_USER_ERROR;
	payload: any;
}

export type UserAction =
	| LoginUser
	| LoginUserSuccess
	| LoginUserError
	| SetRole
	| RegisterUser
	| RegisterUserSuccess
	| RegisterUserError
	| GetUser
	| GetUserSuccess
	| GetUserError
	| LogoutUser
	| LogoutUserSuccess
	| GetSpecializations
	| GetSpecializationsSuccess
	| GetMyTrainers
	| GetMyTrainersSuccess
	| GetMyStudents
	| GetMyStudentsSuccess
	| ChangePassword
	| ChangePasswordSuccess
	| ChangePasswordError
	| GetAllTrainers
	| GetAllTrainersSuccess
	| GetAllTrainersError
	| AddTrainers
	| AddTrainersSuccess
	| AddTrainersError
	| EditUser
	| EditUserSuccess
	| EditUserError
	| DeleteUser
	| DeleteUserSuccess
	| DeleteUserError;
