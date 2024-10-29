import axios from 'axios';
import { AUTH_URL } from '../constants/apiUrls';

const endPoints = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
	LOGOUT: '/auth/logout',
	SPECIALIZATIONS: '/users/specializations',
	MYTRAINERS: '/users/mytrainers',
	MYSTUDENTS: '/users/mystudents',
	ALLTRAINERS: '/users/other-trainers',
	ADDTRAINERS: '/users/add-trainers',
	ME: '/users/me',
	CHANGEPASSWORD: '/users/update-password',
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
	logout = async () => {
		let { data } = await this.client.get(endPoints.LOGOUT);
		localStorage.removeItem('token');
		return data;
	};
	getUser = async () => {
		let { data } = await this.client.get(endPoints.ME);
		return data;
	};
	getSpecializations = async () => {
		let { data } = await this.client.get(endPoints.SPECIALIZATIONS);
		return data;
	};
	getMyTrainers = async () => {
		let { data } = await this.client.get(endPoints.MYTRAINERS);
		return data;
	};
	getMyStudents = async () => {
		let { data } = await this.client.get(endPoints.MYSTUDENTS);
		return data;
	};
	changePassword = async (passwords: any) => {
		let { data } = await this.client.put(endPoints.CHANGEPASSWORD, passwords);
		return data;
	};
	getAllTrainers = async () => {
		let { data } = await this.client.get(endPoints.ALLTRAINERS);
		return data;
	};
	addTrainers = async (ids: any) => {
		let { data } = await this.client.post(endPoints.ADDTRAINERS, ids);
		return data;
	};
	editProfile = async (user: any) => {
		let { data } = await this.client.put(endPoints.ME, user);
		return data;
	};
	deleteUser = async () => {
		let { data } = await this.client.delete(endPoints.ME);
		localStorage.removeItem('token');
		return data;
	};
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthSevice();
