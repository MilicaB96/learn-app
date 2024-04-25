/* eslint-disable array-callback-return */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { LanguageContext } from '../../App';
import { RegistrationProps } from './RegistartionProps';
import { UserActionTypes } from '../../store/user/types';
import { selectIsAuth, selectErrors } from '../../store/user/selectors';

import './RegistartionForm.scss';
import ErrorBox from '../ErrorBox/ErrorBox';

function RegistrationForm({ role }: RegistrationProps) {
	const [error, setError] = useState([]);
	const [user, setUser] = useState({});
	const [specialization, setSpecialization] = useState('mentor');
	const lang = useContext(LanguageContext);
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);
	const registerError = useSelector(selectErrors);
	const navigate = useNavigate();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setError([]);
		setUser({ ...user, specialization: specialization });
		dispatch({
			type: UserActionTypes.REGISTER_USER,
			payload: { ...user, role },
		});
	};
	useEffect(() => {
		if (isAuth) {
			setUser({});
			navigate('/registration-verification');
		}
	}, [isAuth, navigate]);

	useEffect(() => {
		if (registerError) {
			setError(
				registerError
					.map((error: any) => Object.values(error.constraints))
					.flat(Infinity)
			);
		}
	}, [registerError]);

	return (
		<div>
			<div className='registration-form-outline'>
				<form className='registration-form' onSubmit={handleSubmit}>
					<div className='registration-box'>
						<label
							className={
								error.some((item: any) => item.includes('first'))
									? 'label-danger registartion-label'
									: 'label registartion-label'
							}
							htmlFor='first-name'
						>
							{lang.registration['first-name']}
						</label>
						<input
							type='text'
							className={
								error.some((item: any) => item.includes('first'))
									? 'input-danger registration-input'
									: 'input registration-input'
							}
							name='first-name'
							placeholder={lang.registration.placeholder['first-name']}
							onChange={(e) => setUser({ ...user, firstName: e.target.value })}
						/>
						{error.some((item: any) => item.includes('first')) &&
							error.map((item: any) => {
								if (item.includes('first')) {
									return <ErrorBox text={item} />;
								}
							})}
					</div>
					<div className='registration-box'>
						<label
							className={
								error.some((item: any) => item.includes('last'))
									? 'label-danger registartion-label'
									: 'label registartion-label'
							}
							htmlFor='last-name'
						>
							{lang.registration['last-name']}
						</label>
						<input
							type='text'
							className={
								error.some((item: any) => item.includes('last'))
									? 'input-danger registration-input'
									: 'input registration-input'
							}
							name='last-name'
							placeholder={lang.registration.placeholder['last-name']}
							onChange={(e) => setUser({ ...user, lastName: e.target.value })}
						/>
						{error.some((item: any) => item.includes('last')) &&
							error.map((item: any, index) => {
								if (item.includes('last')) {
									return <ErrorBox key={index} text={item} />;
								}
							})}
					</div>
					<div className='registration-box'>
						<label
							className={
								error.some((item: any) => item.includes('email'))
									? 'label-danger registartion-label'
									: 'label registartion-label'
							}
							htmlFor='email'
						>
							{lang.registration['email']}
						</label>
						<input
							type='email'
							className={
								error.some((item: any) => item.includes('email'))
									? 'input-danger registration-input'
									: 'input registration-input'
							}
							name='email'
							placeholder={lang.registration.placeholder['email']}
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
						{error.some((item: any) => item.includes('email')) &&
							error.map((item: any, index) => {
								if (item.includes('email')) {
									return <ErrorBox key={index} text={item} />;
								}
							})}
					</div>
					{role === 'student' ? (
						<div>
							<div className='registration-box'>
								<label
									className={
										error.some((item: any) => item.includes('date'))
											? 'label-danger registartion-label'
											: 'label registartion-label'
									}
									htmlFor='dob'
								>
									{lang.registration['dob']}
									{lang.registration.optional}
								</label>
								<input
									type='text'
									className={
										error.some((item: any) => item.includes('date'))
											? 'input-danger registration-input'
											: 'input registration-input'
									}
									name='dob'
									placeholder={lang.registration.placeholder['dob']}
									onChange={(e) =>
										setUser({ ...user, dateOfBirth: e.target.value })
									}
								/>
								{error.some((item: any) => item.includes('date')) &&
									error.map((item: any, index) => {
										if (item.includes('date')) {
											return <ErrorBox key={index} text={item} />;
										}
									})}
							</div>
							<div className='registration-box'>
								<label
									className={
										error.some((item: any) => item.includes('address'))
											? 'label-danger registartion-label'
											: 'label registartion-label'
									}
									htmlFor='address'
								>
									{lang.registration['address']}
									{lang.registration.optional}
								</label>
								<input
									type='text'
									className={
										error.some((item: any) => item.includes('address'))
											? 'input-danger registration-input'
											: 'input registration-input'
									}
									name='address'
									placeholder={lang.registration.placeholder['address']}
									onChange={(e) =>
										setUser({ ...user, address: e.target.value })
									}
								/>
							</div>
							{error.some((item: any) => item.includes('address')) &&
								error.map((item: any, index) => {
									if (item.includes('address')) {
										return <ErrorBox key={index} text={item} />;
									}
								})}
						</div>
					) : (
						<div className='registration-box'>
							<label
								className={
									error.some((item: any) => item.includes('specialization'))
										? 'label-danger registartion-label'
										: 'label registartion-label'
								}
								htmlFor='specialization'
							>
								{lang.registration['specialization']}
							</label>
							<select
								className={
									error.some((item: any) => item.includes('specialization'))
										? 'input-danger registration-input'
										: 'input registration-input'
								}
								name='specialization'
								value={specialization}
								onChange={(e) => {
									setSpecialization(e.target.value);
								}}
							>
								<option value='mentor'>Mentor</option>
								<option value='othervalue'>OtherValue</option>
							</select>
							{error.some((item: any) => item.includes('specialization')) &&
								error.map((item: any, index) => {
									if (item.includes('specialization')) {
										return <ErrorBox key={index} text={item} />;
									}
								})}
						</div>
					)}
					<button className='button-prime registration-button' type='submit'>
						{lang.registration['submit-button']}
					</button>
				</form>
			</div>
		</div>
	);
}

export default RegistrationForm;
