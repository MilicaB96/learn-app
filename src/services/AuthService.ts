import axios from 'axios';
import { AUTH_URL } from '../constants/apiUrls';

const endPoints = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
};

class AuthSevice {
	protected client;
	constructor() {
		this.client = axios.create({
			baseURL: AUTH_URL,
		});
		this.client.interceptors.request.use((req) => {
			const token = localStorage.getItem('token');
			if (token) {
				req.headers['Authorization'] = `Bearer ${token}`;
			}
			return req;
		});
	}
	login = async (credentials: any) => {
		let { data } = await this.client.post(endPoints.LOGIN, credentials);
		localStorage.setItem('token', data.token);
		return data;
	};
	register = async (user: any) => {
		let { data } = await this.client.post(endPoints.REGISTER, user);
		localStorage.setItem('token', data.token);
		return data;
	};
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthSevice();
