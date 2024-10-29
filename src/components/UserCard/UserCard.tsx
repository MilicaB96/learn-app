import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import Avatar from '../Avatar/Avatar';
import user from '../../assets/user.svg';
import leave from '../../assets/leave.svg';
import { LanguageContext } from '../../App';
import { selectEmail, selectUsername } from '../../store/user/selectors';

import './UserCard.scss';

function UserCard({ dropDown, setDropDown, handleSignOut }: any) {
	const email = useSelector(selectEmail);
	const username = useSelector(selectUsername);
	const lang = useContext(LanguageContext);
	return (
		<div>
			<div className='header-dropdown-user'>
				<button
					className='header-dropdown-avatar'
					onClick={() => setDropDown(!dropDown)}
				>
					<Avatar />
				</button>
				<div className='header-dropdown-user-data'>
					<p className='header-dropdown-username'>{username}</p>
					<p className='header-dropdown-email'>{email}</p>
				</div>
			</div>
			<div className='header-dropdown-links'>
				<Link className='header-dropdown-link' to='/my-account'>
					<img
						className='dropdown-image dropdown-image-user'
						src={user}
						alt=''
					/>
					{lang['user-card'].myaccount}
				</Link>
			</div>
			<div className='header-dropdown-logout'>
				<button onClick={handleSignOut} className='header-dropdown-button'>
					<img
						className='dropdown-image dropdown-image-leave'
						src={leave}
						alt=''
					/>
					{lang['user-card']['sign-out']}
				</button>
			</div>
		</div>
	);
}

export default UserCard;
