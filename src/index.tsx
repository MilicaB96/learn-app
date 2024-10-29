import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './style.scss';

import store from './store';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import JoinUs from './pages/JoinUs/JoinUs';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import Verification from './pages/Registration/Verification';
import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';
import MyAccount from './pages/MyAccount/MyAccount';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import AddTrainers from './components/AddTrainers/AddTrainers';
import EditProfile from './pages/EditProfile/EditProfile';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/login'
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path='/join-us'
						element={
							<PublicRoute>
								<JoinUs />
							</PublicRoute>
						}
					/>
					<Route path='/registration' element={<Registration />} />
					<Route path='/registration-verification' element={<Verification />} />
					<Route
						path='/my-account'
						element={
							<PrivateRoute>
								<MyAccount />
							</PrivateRoute>
						}
					/>
					<Route path='/change-password' element={<ChangePassword />} />
					<Route
						path='/add-trainers'
						element={
							<PrivateRoute>
								<AddTrainers />
							</PrivateRoute>
						}
					/>
					<Route
						path='/edit-profile'
						element={
							<PrivateRoute>
								<EditProfile />
							</PrivateRoute>
						}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
