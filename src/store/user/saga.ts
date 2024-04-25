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
function* register(action: UserAction): any {
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

export function* watchAuth() {
	yield takeLatest(UserActionTypes.LOGIN_USER, login);
	yield takeLatest(UserActionTypes.REGISTER_USER, register);
}
