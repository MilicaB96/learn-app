import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../App';
import {
	selectErrors,
	selectIsAuth,
	selectIsLoading,
} from '../../store/user/selectors';
import lock from '../../assets/lock.svg';
import user from '../../assets/user.svg';
import hide from '../../assets/hide.svg';
import view from '../../assets/view.svg';
import './Login.scss';
import { UserActionTypes } from '../../store/user/types';
import ErrorBox from '../../components/ErrorBox/ErrorBox';

function Login() {
	const isLoading = useSelector(selectIsLoading);
	const isAuth = useSelector(selectIsAuth);
	const loginError = useSelector(selectErrors);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [data, setData] = useState({});

	const lang = useContext(LanguageContext);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch({ type: UserActionTypes.LOGIN_USER, payload: { ...data } });
	};

	useEffect(() => {
		if (isAuth) {
			setData({});
			navigate('/');
		}
	}, [isAuth, navigate]);
	return (
		<>
			{isLoading && <span className='loader'></span>}
			<div className={isLoading ? 'login-overlay-true' : 'login-overlay-false'}>
				<div className='login'>
					<div className='login-intro'>
						<h1 className='login-title'>{lang.login.title}</h1>
						<p className='login-message'>{lang.login.welcome}</p>
					</div>
					<form className='login-form' onSubmit={handleSubmit}>
						<label className='label login-label' htmlFor='username'>
							{lang.login.username}
						</label>
						<div className='login-input-box'>
							<input
								type='text'
								name='username'
								id='username'
								className='input login-input'
								placeholder={lang.login['username-placeholder']}
								onChange={(e) => setData({ ...data, username: e.target.value })}
							/>
							<img src={user} className='icon login-icon' alt='' />
						</div>
						<label className='label login-label' htmlFor='password'>
							{lang.login.password}
						</label>
						<div className='login-input-box'>
							<input
								type={showPassword ? 'text' : 'password'}
								name='password'
								id='password'
								className='input login-input'
								placeholder={lang.login['password-placeholder']}
								onChange={(e) => setData({ ...data, password: e.target.value })}
							/>
							<img src={lock} className='icon login-icon' alt='' />
							<button
								type='button'
								onClick={() => setShowPassword(!showPassword)}
								className='login-password-button'
							>
								{showPassword ? (
									<img src={view} className='icon login-password-icon' alt='' />
								) : (
									<img src={hide} className='icon login-password-icon' alt='' />
								)}
							</button>
						</div>
						<button type='submit' className='button-prime login-button'>
							{lang.login['submit-button']}
						</button>
						{loginError && <ErrorBox text={loginError} />}
					</form>
					<p className='login-or'>{lang.login.or}</p>
					<p className='login-redirect'>
						{lang.login['redirect-text']}
						<Link className='login-redirect-bold' to='/join-us'>
							{lang.login['redirect-register']}
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
