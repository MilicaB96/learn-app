import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { useSelector } from 'react-redux';
import { selectPassword, selectUsername } from '../../store/user/selectors';
import check from '../../assets/check.svg';
import './Verification.scss';

function Verification() {
	const lang = useContext(LanguageContext);
	const username = useSelector(selectUsername);
	const password = useSelector(selectPassword);
	return (
		<div className='registration-verification'>
			<h1 className='registration-verification-title'>
				{lang.registration.registration}
			</h1>
			<div className='registration-verification-icon-outline'>
				<img className='registration-verification-icon' src={check} alt='' />
			</div>
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
			<button className='button-prime registration-verification-button'>
				{lang.registration['my-account']}
			</button>
		</div>
	);
}

export default Verification;
