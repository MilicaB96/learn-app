import profile from '../../assets/profile.svg';
import './Avatar.scss';

function Avatar() {
	return (
		<div className='avatar'>
			<img className='icon' src={profile} alt='' />
		</div>
	);
}

export default Avatar;
