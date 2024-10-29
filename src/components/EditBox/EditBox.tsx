import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../App';
import {
	selectFlag,
	selectRole,
	selectSpecializations,
	selectUser,
} from '../../store/user/selectors';
import { UserActionTypes } from '../../store/user/types';
import ErrorBox from '../ErrorBox/ErrorBox';

import './EditBox.scss';
import Switch from '../Switch/Switch';

function EditBox() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [error, setError] = useState([]);
	const [user, setUser] = useState({});
	const role = useSelector(selectRole);
	const data = useSelector(selectUser);
	const specializations = useSelector(selectSpecializations);
	const flag = useSelector(selectFlag);
	const lang = useContext(LanguageContext);
	const [checked, setChecked] = useState(data.isActive);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(user);
		setError([]);
		dispatch({
			type: UserActionTypes.EDIT_USER,
			payload: { ...user },
		});
	};

	useEffect(() => {
		if (role === 'trainer') {
			dispatch({ type: UserActionTypes.GET_SPECIALIZATIONS });
		}
	}, [role, dispatch]);
	useEffect(() => {
		if (flag) {
			navigate('/my-account');
		}
	}, [flag, navigate]);
	return (
		<div>
			{' '}
			<div className='edit-profile-container'>
				<div className='edit-profile-form'>
					<h1 className='edit-profile-subtitle'>
						{lang['edit-profile']['edit-profile']}
					</h1>
					<div className='edit-profile-box'>
						<label
							className={
								error.some((item: any) => item.includes('first'))
									? 'label-danger edit-profile-label'
									: 'label edit-profile-label'
							}
							htmlFor='first-name'
						>
							{lang['edit-profile']['first-name']}
						</label>
						<input
							type='text'
							className={
								error.some((item: any) => item.includes('first'))
									? 'input-danger edit-profile-input'
									: 'input edit-profile-input'
							}
							name='first-name'
							placeholder={data.firstName}
							onChange={(e) => setUser({ ...user, firstName: e.target.value })}
						/>
						{error.some((item: any) => item.includes('first')) &&
							error.map((item: any) => {
								if (item.includes('first')) {
									return <ErrorBox text={item} />;
								}
							})}
					</div>
					<div className='edit-profile-box'>
						<label
							className={
								error.some((item: any) => item.includes('last'))
									? 'label-danger edit-profile-label'
									: 'label edit-profile-label'
							}
							htmlFor='last-name'
						>
							{lang['edit-profile']['last-name']}
						</label>
						<input
							type='text'
							className={
								error.some((item: any) => item.includes('last'))
									? 'input-danger edit-profile-input'
									: 'input edit-profile-input'
							}
							name='last-name'
							placeholder={data.lastName}
							onChange={(e) => setUser({ ...user, lastName: e.target.value })}
						/>
						{error.some((item: any) => item.includes('last')) &&
							error.map((item: any, index) => {
								if (item.includes('last')) {
									return <ErrorBox key={index} text={item} />;
								}
							})}
					</div>
					<div className='edit-profile-box'>
						<label
							className={
								error.some((item: any) => item.includes('username'))
									? 'label-danger edit-profile-label'
									: 'label edit-profile-label'
							}
							htmlFor='username'
						>
							{lang['edit-profile']['username']}
						</label>
						<input
							type='text'
							className={
								error.some((item: any) => item.includes('last'))
									? 'input-danger edit-profile-input'
									: 'input edit-profile-input'
							}
							name='username'
							placeholder={data.username}
							onChange={(e) => setUser({ ...user, username: e.target.value })}
						/>
						{error.some((item: any) => item.includes('last')) &&
							error.map((item: any, index) => {
								if (item.includes('username')) {
									return <ErrorBox key={index} text={item} />;
								}
							})}
					</div>
					{role === 'student' && (
						<div>
							<div className='edit-profile-box'>
								<label
									className={
										error.some((item: any) => item.includes('date'))
											? 'label-danger edit-profile-label'
											: 'label edit-profile-label'
									}
									htmlFor='dob'
								>
									{lang['edit-profile']['dob']}
								</label>
								<input
									type='text'
									className={
										error.some((item: any) => item.includes('date'))
											? 'input-danger edit-profile-input'
											: 'input edit-profile-input'
									}
									name='dob'
									placeholder={data.dateOfBirth}
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
							<div className='edit-profile-box'>
								<label
									className={
										error.some((item: any) => item.includes('address'))
											? 'label-danger edit-profile-label'
											: 'label edit-profile-label'
									}
									htmlFor='address'
								>
									{lang['edit-profile']['address']}
								</label>
								<input
									type='text'
									className={
										error.some((item: any) => item.includes('address'))
											? 'input-danger edit-profile-input'
											: 'input edit-profile-input'
									}
									name='address'
									placeholder={data.address}
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
					)}
					<div className='edit-profile-box'>
						<label
							className={
								error.some((item: any) => item.includes('email'))
									? 'label-danger edit-profile-label'
									: 'label edit-profile-label'
							}
							htmlFor='email'
						>
							{lang['edit-profile']['email']}
						</label>
						<input
							type='email'
							className={
								error.some((item: any) => item.includes('email'))
									? 'input-danger edit-profile-input'
									: 'input edit-profile-input'
							}
							name='email'
							placeholder={data.email}
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
						{error.some((item: any) => item.includes('email')) &&
							error.map((item: any, index) => {
								if (item.includes('email')) {
									return <ErrorBox key={index} text={item} />;
								}
							})}
					</div>
					<div className='edit-profile-box'>
						<label
							className={
								error.some((item: any) => item.includes('email'))
									? 'label-danger edit-profile-label switch-label'
									: 'label edit-profile-label switch-label'
							}
							htmlFor='email'
						>
							{lang['edit-profile'].active}
						</label>
						<Switch
							checked={checked}
							setChecked={setChecked}
							user={user}
							setUser={setUser}
						/>
					</div>
				</div>
				<div
					className={
						role === 'trainer' ? 'edit-profile-select' : 'student-invisible'
					}
				>
					<label
						className={
							error.some((item: any) => item.includes('specialization'))
								? 'label-danger edit-profile-label'
								: 'label edit-profile-label'
						}
						htmlFor='specialization'
					>
						{lang['edit-profile']['specialization']}
					</label>
					{specializations?.length && (
						<select
							className={
								error.some((item: any) => item.includes('specialization'))
									? 'input-danger edit-profile-input'
									: 'input edit-profile-input'
							}
							name='specialization'
							onChange={(e) => {
								setUser(() =>
									setUser({ ...user, specialization: e.target.value })
								);
							}}
						>
							<option value=''>Enter a specialization</option>
							{specializations.map((spec: any) => (
								<option key={spec.id} value={spec.id}>
									{spec.specialization}
								</option>
							))}
						</select>
					)}
					{error.some((item: any) => item.includes('specialization')) &&
						error.map((item: any, index) => {
							if (item.includes('specialization')) {
								return <ErrorBox key={index} text={item} />;
							}
						})}
				</div>
			</div>
			<div className='edit-profile-buttons'>
				<button
					onClick={() => navigate('/my-account')}
					className='edit-profile-button edit-profile-cancel'
				>
					{lang['edit-profile'].cancel}
				</button>
				<button
					onClick={handleSubmit}
					className='edit-profile-button button-prime'
				>
					{lang['edit-profile'].save}
				</button>
			</div>
		</div>
	);
}

export default EditBox;
