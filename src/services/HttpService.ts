import axios from 'axios';

export default class HttpService {
	protected client;
	constructor() {
		this.client = axios.create({
			baseURL: process.env.REACT_APP_BASE_URL,
		});
		this.client.interceptors.request.use((req) => {
			const token = localStorage.getItem('token');
			if (token) {
				req.headers['Authorization'] = `Bearer ${token}`;
			}
			return req;
		});
	}
}
