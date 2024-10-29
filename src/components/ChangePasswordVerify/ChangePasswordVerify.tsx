import { useContext } from 'react';
import { LanguageContext } from '../../App';
import Check from '../Check/Check';

import './ChangePasswordVerify.scss';
import { useNavigate } from 'react-router-dom';

function ChangePasswordVerify() {
	const lang = useContext(LanguageContext);
	const navigate = useNavigate();
	return (
		<div className='changepasswordverify'>
			<h1 className='changepasswordverify-title'>
				{lang['change-password-confirmation'].title}
			</h1>
			<div>
				<Check />
			</div>
			<p className='changepasswordverify-description'>
				{lang['change-password-confirmation'].description}
			</p>
			<button
				onClick={() => navigate('/login')}
				className='button-prime changepasswordverify-button'
			>
				{lang['change-password-confirmation']['sign-in']}
			</button>
		</div>
	);
}

export default ChangePasswordVerify;
