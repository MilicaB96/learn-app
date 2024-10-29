import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageContext } from '../../App';
import { selectMyStudents } from '../../store/user/selectors';
import { UserActionTypes } from '../../store/user/types';
import Table from '../Table/Table';

import './MyStudents.scss';

function MyStudents() {
	const lang = useContext(LanguageContext);
	const dispatch = useDispatch();
	const myStudents = useSelector(selectMyStudents);
	useEffect(() => {
		dispatch({ type: UserActionTypes.GET_MY_STUDENTS });
	}, []);
	return (
		<div className='mystudents'>
			<h1 className='mystudents-title'>{lang['my-students'].title}</h1>
			<Table
				header1={lang['my-students'].name}
				header2={lang['my-students'].status}
				data={myStudents}
			/>
		</div>
	);
}

export default MyStudents;
