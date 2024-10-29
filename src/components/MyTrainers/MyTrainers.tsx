import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyTrainers } from '../../store/user/selectors';
import { UserActionTypes } from '../../store/user/types';
import Table from '../Table/Table';

import './MyTrainers.scss';
import { useLocation, useNavigate } from 'react-router-dom';

function MyTrainers() {
	const lang = useContext(LanguageContext);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const myTrainers = useSelector(selectMyTrainers);
	useEffect(() => {
		dispatch({ type: UserActionTypes.GET_MY_TRAINERS });
	}, []);
	return (
		<div className='mytrainers'>
			<div className='mytrainers-header'>
				<h1 className='mytrainers-title'>{lang['my-trainers'].title}</h1>
				{location.pathname === '/my-account' && (
					<button
						onClick={() => navigate('/add-trainers')}
						className='button-prime mytrainers-button'
					>
						{lang['my-trainers'].button}
					</button>
				)}
			</div>
			<Table
				header1={lang['my-trainers'].name}
				header2={lang['my-trainers'].specialization}
				data={myTrainers}
			/>
		</div>
	);
}

export default MyTrainers;
