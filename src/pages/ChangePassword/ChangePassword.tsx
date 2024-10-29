import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserActionTypes } from '../../store/user/types';
import { selectFlag } from '../../store/user/selectors';
import { LanguageContext } from '../../App';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';
import lock from '../../assets/lock.svg';

import './ChangePassword.scss';
import ChangePasswordVerify from '../../components/ChangePasswordVerify/ChangePasswordVerify';

function ChangePassword() {
	const lang = useContext(LanguageContext);
	const dispatch = useDispatch();
	const flag = useSelector(selectFlag);
	const handleSubmit = (passwords: any) => {
		dispatch({ type: UserActionTypes.CHANGE_PASSWORD, payload: passwords });
	};
	return flag ? (
		<ChangePasswordVerify />
	) : (
		<div className='changepassword'>
			<h1 className='changepassword-title'>{lang['change-password'].title}</h1>
			<div className='changepassword-flex'>
				<p className='changepassword-description'>
					<img src={lock} alt='' className='changepassword-icon' />
					{lang['change-password']['change-password']}
				</p>
				<ChangePasswordForm handleSubmit={handleSubmit} />
			</div>
		</div>
	);
}

export default ChangePassword;
