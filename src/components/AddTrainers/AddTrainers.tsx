import { useContext } from 'react';
import { LanguageContext } from '../../App';

import './AddTrainers.scss';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import MyTrainers from '../MyTrainers/MyTrainers';
import AllTrainers from '../../pages/AddTrainer/AllTrainers';

function AddTrainers() {
	const lang = useContext(LanguageContext);
	return (
		<div className='addtrainers'>
			<div className='addtrainers-breadcrumbs'>
				<BreadCrumbs
					links={['My Account', 'Add Trainer']}
					routes={['/my-account']}
				/>
			</div>
			<div>
				<h1 className='addtrainers-title'>
					{lang['add-trainer']['add-trainer']}
				</h1>
				<p className='addtrainers-description'>
					{lang['add-trainer'].description}
				</p>
				<p className='addtrainers-description'>{lang['add-trainer'].warning}</p>
			</div>
			<div className='addtrainers-tables'>
				<MyTrainers />
				<AllTrainers />
			</div>
		</div>
	);
}

export default AddTrainers;
