import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoading, selectRole } from '../../store/user/selectors';
import student from '../../assets/student.png';
import trainer from '../../assets/trainer.png';
import RegistartionForm from '../../components/RegistartionForm/RegistartionForm';

import './Registration.scss';

function Registration() {
	const role = useSelector(selectRole);
	const isLoading = useSelector(selectIsLoading);
	const navigate = useNavigate();
	useEffect(() => {
		if (!role) {
			navigate('/join-us', { replace: true });
		}
	}, [role, navigate]);

	return (
		<>
			{isLoading && <span className='loader'></span>}
			<div
				className={
					isLoading ? 'registration-overlay-true' : 'registration-overlay-false'
				}
			>
				<div className='registration'>
					<div>
						<img
							className='registration-image'
							src={role === 'student' ? student : trainer}
							alt=''
						/>
					</div>
					<RegistartionForm role={role} />
				</div>
			</div>
		</>
	);
}

export default Registration;
