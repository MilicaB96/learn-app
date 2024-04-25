import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Login';

import './style.scss';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import JoinUs from './pages/JoinUs/JoinUs';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import Verification from './pages/Registration/Verification';
import PublicRoute from './routers/PublicRoute';

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
					<Route
						path='/registration'
						element={
							<PublicRoute>
								<Registration />
							</PublicRoute>
						}
					/>
					<Route
						path='/registration-verification'
						element={
							<PublicRoute>
								<Verification />
							</PublicRoute>
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
