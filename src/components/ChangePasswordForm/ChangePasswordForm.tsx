import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';
import ErrorBox from '../ErrorBox/ErrorBox';
import view from '../../assets/view.svg';
import hide from '../../assets/hide.svg';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectErrors } from '../../store/user/selectors';

import './ChangePasswordForm.scss';

function ChangePasswordForm({ handleSubmit }: any) {
	const lang = useContext(LanguageContext);
	const navigate = useNavigate();
	const error = useSelector(selectErrors);
	const [passwords, setPasswords] = useState({
		currentPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	});
	const [visibility, setVisibility] = useState({
		currentPassword: false,
		newPassword: false,
		confirmNewPassword: false,
	});
	return (
		<div className='changepasswordform-outline'>
			<form>
				<div className='input-box-outline'>
					<div>
						<label
							className='label changepassword-label'
							htmlFor='currentPassword'
						>
							{lang['change-password']['current-password']}
						</label>
						<div className='changepassword-input-box'>
							<input
								type={visibility.currentPassword ? 'text' : 'password'}
								name='currentPassword'
								id='currentPassword'
								className='input changepassword-input'
								placeholder={
									lang['change-password']['current-password-placeholder']
								}
								onChange={(e) =>
									setPasswords({
										...passwords,
										currentPassword: e.target.value,
									})
								}
							/>
							<button
								type='button'
								onClick={() =>
									setVisibility({
										...visibility,
										currentPassword: !visibility.currentPassword,
									})
								}
								className='changepassword-button'
							>
								{visibility.currentPassword ? (
									<img src={view} className='icon changepassword-icon' alt='' />
								) : (
									<img src={hide} className='icon changepassword-icon' alt='' />
								)}
							</button>
						</div>
					</div>
					<div>
						<label className='label changepassword-label' htmlFor='newPassword'>
							{lang['change-password']['new-password']}
						</label>
						<div className='changepassword-input-box'>
							<input
								type={visibility.newPassword ? 'text' : 'password'}
								name='newPassword'
								id='newPassword'
								className='input changepassword-input'
								placeholder={
									lang['change-password']['new-password-placeholder']
								}
								onChange={(e) =>
									setPasswords({ ...passwords, newPassword: e.target.value })
								}
							/>
							<button
								type='button'
								onClick={() =>
									setVisibility({
										...visibility,
										newPassword: !visibility.newPassword,
									})
								}
								className='changepassword-button'
							>
								{visibility.newPassword ? (
									<img src={view} className='icon changepassword-icon' alt='' />
								) : (
									<img src={hide} className='icon changepassword-icon' alt='' />
								)}
							</button>
						</div>
					</div>
					<div>
						<label
							className='label changepassword-label'
							htmlFor='confirmNewPassword'
						>
							{lang['change-password']['confirm-new-password']}
						</label>
						<div className='changepassword-input-box'>
							<input
								type={visibility.confirmNewPassword ? 'text' : 'password'}
								name='confirmNewPassword'
								id='confirmNewPassword'
								className='input changepassword-input'
								placeholder={
									lang['change-password']['confirm-new-password-placeholder']
								}
								onChange={(e) =>
									setPasswords({
										...passwords,
										confirmNewPassword: e.target.value,
									})
								}
							/>
							<button
								type='button'
								onClick={() =>
									setVisibility({
										...visibility,
										confirmNewPassword: !visibility.confirmNewPassword,
									})
								}
								className='changepassword-button'
							>
								{visibility.confirmNewPassword ? (
									<img src={view} className='icon changepassword-icon' alt='' />
								) : (
									<img src={hide} className='icon changepassword-icon' alt='' />
								)}
							</button>
						</div>
					</div>
				</div>
				<div className='changepasswordform-buttons'>
					<button
						type='button'
						onClick={() => navigate('/my-account')}
						className='button-prime changepasswordform-button cancel-button'
					>
						{lang['change-password'].cancel}
					</button>
					<button
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							return handleSubmit(passwords);
						}}
						className='button-prime changepasswordform-button confirm-button'
					>
						{lang['change-password']['change-password']}
					</button>
					{error && <ErrorBox text={error} />}
				</div>
			</form>
		</div>
	);
}

export default ChangePasswordForm;
