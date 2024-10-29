import check from '../../assets/check.svg';

import './Check.scss';

function Check() {
	return (
		<div className='check-icon-outline'>
			<img className='check-icon' src={check} alt='' />
		</div>
	);
}

export default Check;
