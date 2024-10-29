import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import { LanguageContext } from '../../App';
import profile from '../../assets/profile.svg';
import ccheck from '../../assets/ccheck.svg';

import './MyProfile.scss';
import { useNavigate } from 'react-router-dom';

function MyProfile() {
	const user = useSelector(selectUser);
	const lang = useContext(LanguageContext);
	const navigate = useNavigate();
	return (
		<div className='myprofile'>
			<h1 className='myprofile-title'>{lang['my-profile'].title}</h1>
			<div className='myprofile-card'>
				<div className='myprofile-avatar-outline'>
					<img className='myprofile-avatar' src={profile} alt='' />
				</div>
				<div>
					<p className='myprofile-tag'>{lang['my-profile'].status}</p>
					<div className='myprofile-status'>
						{user.isActive ? (
							<div>
								<img className='myprofile-check' src={ccheck} alt='' />
								<span className='myprofile-status-active'>
									{lang['my-profile'].active}
								</span>
							</div>
						) : (
							<span className='myprofile-status-not-active'>
								{lang['my-profile']['not-active']}
							</span>
						)}
					</div>
				</div>
			</div>
			<div className='myprofile-info-box'>
				<p className='myprofile-tag'>{lang['my-profile'].firstname}</p>
				<p className='myprofile-info'>{user.firstName}</p>
			</div>
			<div className='myprofile-info-box'>
				<p className='myprofile-tag'>{lang['my-profile'].lastname}</p>
				<p className='myprofile-info'>{user.lastName}</p>
			</div>
			<div className='myprofile-info-box'>
				<p className='myprofile-tag'>{lang['my-profile'].username}</p>
				<p className='myprofile-info'>{user.username}</p>
			</div>
			{user?.specialization && (
				<div className='myprofile-info-box'>
					<p className='myprofile-tag'>{lang['my-profile'].specialization}</p>
					<p className='myprofile-info'>{user.specialization}</p>
				</div>
			)}
			{user?.dateOfBirth && (
				<div className='myprofile-info-box'>
					<p className='myprofile-tag'>{lang['my-profile'].dob}</p>
					<p className='myprofile-info'>{user.dateOfBirth}</p>
				</div>
			)}
			{user?.address && (
				<div className='myprofile-info-box'>
					<p className='myprofile-tag'>{lang['my-profile'].address}</p>
					<p className='myprofile-info'>{user.address}</p>
				</div>
			)}
			<div className='myprofile-info-box'>
				<p className='myprofile-tag'>{lang['my-profile'].email}</p>
				<p className='myprofile-info'>{user.email}</p>
			</div>
			<div className='myprofile-button-box'>
				<button
					onClick={() => navigate('/edit-profile')}
					className='button-prime myprofile-button'
				>
					{lang['my-profile'].editprofile}
				</button>
				<button
					onClick={() => navigate('/change-password')}
					className='button-secondary myprofile-button'
				>
					{lang['my-profile'].changePassword}
				</button>
			</div>
		</div>
	);
}

export default MyProfile;
