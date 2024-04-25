import { all } from 'redux-saga/effects';
import { watchAuth } from './user/saga';

export function* sagas() {
	yield all([watchAuth()]);
}
