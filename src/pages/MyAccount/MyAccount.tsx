import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyProfile from '../../components/MyProfile/MyProfile';
import MyTrainers from '../../components/MyTrainers/MyTrainers';
import MyTrainings from '../../components/MyTrainings/MyTrainings';
import MyStudents from '../../components/myStudents/MyStudents';
import BasicModal from '../../components/Modal/Modal';
import { LanguageContext } from '../../App';
import { selectFlag, selectRole } from '../../store/user/selectors';

import './MyAccount.scss';
import { UserActionTypes } from '../../store/user/types';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const lang = useContext(LanguageContext);
	const role = useSelector(selectRole);
	const handleDelete = () => {
		dispatch({ type: UserActionTypes.DELETE_USER });
		navigate('/');
	};
	return (
		<div className='myaccount'>
			<div>
				<div className='myaccount-top'>
					<MyProfile />
					{role === 'student' && <MyTrainers />}
					{role === 'trainer' && <MyStudents />}
				</div>
				{role === 'student' && (
					<button
						onClick={handleOpen}
						className='button-important myaccount-button-delete'
					>
						{lang['my-account'].button}
					</button>
				)}
			</div>
			<div className='myaccount-bottom'>
				<MyTrainings />
			</div>
			<BasicModal
				open={open}
				handleClose={handleClose}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default MyAccount;
