import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageContext } from '../../App';
import DataTable from '../../components/DataTable/DataTable';
import { UserActionTypes } from '../../store/user/types';
import { selectAllTrainers } from '../../store/user/selectors';

import './AllTrainers.scss';

function AllTrainers() {
	const lang = useContext(LanguageContext);
	const dispatch = useDispatch();
	const [ids, setIds] = useState([]);
	const allTrainers = useSelector(selectAllTrainers);
	useEffect(() => {
		dispatch({ type: UserActionTypes.GET_ALL_TRAINERS });
	}, [dispatch]);
	const handleSubmit = () => {
		dispatch({ type: UserActionTypes.ADD_TRAINERS, payload: { ids: ids } });
		setIds([]);
	};
	return (
		<div className='all-trainers'>
			<h1 className='all-trainers-title'>
				{lang['all-trainers']['all-trainers']}
			</h1>
			<DataTable
				header1={lang['all-trainers'].name}
				header2={lang['all-trainers'].specialization}
				data={allTrainers}
				setValues={setIds}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}

export default AllTrainers;
