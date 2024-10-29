import { useContext } from 'react';
import { LanguageContext } from '../../App';

import './MyTrainings.scss';
import { useNavigate } from 'react-router-dom';

function MyTrainings() {
	const lang = useContext(LanguageContext);
	const navigate = useNavigate();
	return (
		<div className='mytrainings'>
			<h1 className='mytrainings-title'>{lang['my-trainings'].title}</h1>
			<p className='mytrainings-description'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, illo,
				rem iure alias asperiores recusandae perspiciatis nihil blanditiis sit
				facere similique neque in qui esse amet debitis eligendi, est vero.
			</p>
			<button
				onClick={() => navigate('/training')}
				className='button-prime mytrainings-button'
			>
				{lang['my-trainings'].button}
			</button>
		</div>
	);
}

export default MyTrainings;
