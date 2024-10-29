import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LanguageContext } from '../../App';
import JoinUsBox from '../../components/JoinUsBox/JoinUsBox';
import registerastrainer from '../../assets/registerastrainer.png';
import registerasstudent from '../../assets/registerasstudent.png';
import { UserActionTypes } from '../../store/user/types';

import './JoinUs.scss';

function JoinUs() {
	const lang = useContext(LanguageContext);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<div className='join-us'>
			<h1 className='join-us-title'>{lang.joinus.joinus}</h1>
			<JoinUsBox
				image={registerastrainer}
				title={lang.joinus['register as trainer']}
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
				neque, cupiditate dignissimos ex quibusdam consequatur ad ea
				voluptatibus nemo eos'
				buttonText={lang.joinus.joinus}
				handleClick={() => {
					navigate('/registration');
					dispatch({ type: UserActionTypes.SET_ROLE, payload: 'trainer' });
				}}
			/>
			<JoinUsBox
				image={registerasstudent}
				title={lang.joinus['register as student']}
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
						neque, cupiditate dignissimos ex quibusdam consequatur ad ea
						voluptatibus nemo eos'
				buttonText={lang.joinus.joinus}
				handleClick={() => {
					navigate('/registration');
					dispatch({ type: UserActionTypes.SET_ROLE, payload: 'student' });
				}}
			/>
		</div>
	);
}

export default JoinUs;
