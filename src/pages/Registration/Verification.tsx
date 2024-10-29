import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../App';
import { useSelector } from 'react-redux';
import {
	selectGeneratedPassword,
	selectUsername,
} from '../../store/user/selectors';
import './Verification.scss';
import Check from '../../components/Check/Check';

function Verification() {
	const lang = useContext(LanguageContext);
	const navigate = useNavigate();
	const username = useSelector(selectUsername);
	const password = useSelector(selectGeneratedPassword);
	return (
		<div className='registration-verification'>
			<h1 className='registration-verification-title'>
				{lang.registration.registration}
			</h1>
			<Check />
			<p className='registration-verification-description'>
				{lang.registration['verification-text']}
			</p>
			<div className='registration-verification-credentials'>
				<p className='registration-verification-username-text'>
					{lang.registration.username}
				</p>
				<p className='registration-verification-username'>{username}</p>
			</div>
			<div className='registration-verification-credentials'>
				<p className='registration-verification-password-text'>
					{lang.registration.password}
				</p>
				<p className='registration-verification-password'>{password}</p>
			</div>
			<button
				onClick={() => navigate('/my-account')}
				className='button-prime registration-verification-button'
			>
				{lang.registration['my-account']}
			</button>
		</div>
	);
}

export default Verification;
