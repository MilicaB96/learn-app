import { call, put, takeLatest } from 'redux-saga/effects';
import { UserAction } from './actions';
import AuthService from '../../services/AuthService';
import { UserActionTypes } from './types';
function* login(action: UserAction): any {
	try {
		const response = yield call(AuthService.login, action.payload);
		yield put({
			type: UserActionTypes.LOGIN_USER_SUCCESS,
			payload: response.user,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.REGISTER_USER_ERROR,
			//@ts-ignore
			payload: error.response.data,
		});
	}
}
function* register(action: any): any {
	try {
		const response = yield call(AuthService.register, action.payload);
		yield put({
			type: UserActionTypes.REGISTER_USER_SUCCESS,
			payload: response.user,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.REGISTER_USER_ERROR,
			//@ts-ignore
			payload: error.response.data,
		});
	}
}
function* get(): any {
	try {
		const response = yield call(AuthService.getUser);
		yield put({
			type: UserActionTypes.GET_USER_SUCCESS,
			payload: response,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.REGISTER_USER_ERROR,
			//@ts-ignore
			payload: error.response.data,
		});
	}
}

function* logout(): any {
	try {
		const response = yield call(AuthService.logout);
		yield put({
			type: UserActionTypes.LOGOUT_USER_SUCCESS,
			payload: response,
		});
	} catch (error) {}
}

function* fetchSpecializations(): any {
	try {
		const response = yield call(AuthService.getSpecializations);
		yield put({
			type: UserActionTypes.GET_SPECIALIZATIONS_SUCCESS,
			payload: response,
		});
	} catch (error) {}
}

function* getMyTrainers(): any {
	try {
		const response = yield call(AuthService.getMyTrainers);
		yield put({
			type: UserActionTypes.GET_MY_TRAINERS_SUCCESS,
			payload: response,
		});
	} catch (error) {}
}

function* getMyStudents(): any {
	try {
		const response = yield call(AuthService.getMyStudents);
		yield put({
			type: UserActionTypes.GET_MY_STUDENTS_SUCCESS,
			payload: response,
		});
	} catch (error) {}
}

function* changePassword(action: UserAction): any {
	try {
		const response = yield call(AuthService.changePassword, action.payload);
		yield put({
			type: UserActionTypes.CHANGE_PASSWORD_SUCCESS,
			payload: response,
		});
		localStorage.removeItem('token');
	} catch (error) {
		yield put({
			type: UserActionTypes.CHANGE_PASSWORD_ERROR,
			//@ts-ignore
			payload: error?.response?.data,
		});
	}
}

function* listTrainers(): any {
	try {
		const response = yield call(AuthService.getAllTrainers);
		yield put({
			type: UserActionTypes.GET_ALL_TRAINERS_SUCCESS,
			payload: response,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.GET_ALL_TRAINERS_ERROR,
			// @ts-ignore
			payload: error?.response?.data,
		});
	}
}

function* addTrainers(action: UserAction): any {
	try {
		const response = yield call(AuthService.addTrainers, action.payload);
		console.log(response);
		yield put({
			type: UserActionTypes.ADD_TRAINERS_SUCCESS,
			payload: response,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.ADD_TRAINERS_ERROR,
			// @ts-ignore
			payload: error?.response?.data,
		});
	}
}

function* editProfile(action: UserAction): any {
	try {
		const response = yield call(AuthService.editProfile, action.payload);
		yield put({
			type: UserActionTypes.EDIT_USER_SUCCESS,
			payload: response,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.EDIT_USER_ERROR,
			// @ts-ignore
			payload: error?.response?.data,
		});
	}
}

function* deleteUser(): any {
	try {
		const response = yield call(AuthService.deleteUser);
		yield put({
			type: UserActionTypes.DELETE_USER_SUCCESS,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.DELETE_USER_ERROR,
			// @ts-ignore
			payload: error?.response?.data,
		});
	}
}

export function* watchAuth() {
	yield takeLatest(UserActionTypes.LOGIN_USER, login);
	yield takeLatest(UserActionTypes.REGISTER_USER, register);
	yield takeLatest(UserActionTypes.GET_USER, get);
	yield takeLatest(UserActionTypes.LOGOUT_USER, logout);
	yield takeLatest(UserActionTypes.GET_SPECIALIZATIONS, fetchSpecializations);
	yield takeLatest(UserActionTypes.GET_MY_TRAINERS, getMyTrainers);
	yield takeLatest(UserActionTypes.GET_MY_STUDENTS, getMyStudents);
	yield takeLatest(UserActionTypes.CHANGE_PASSWORD, changePassword);
	yield takeLatest(UserActionTypes.GET_ALL_TRAINERS, listTrainers);
	yield takeLatest(UserActionTypes.ADD_TRAINERS, addTrainers);
	yield takeLatest(UserActionTypes.EDIT_USER, editProfile);
	yield takeLatest(UserActionTypes.DELETE_USER, deleteUser);
}
