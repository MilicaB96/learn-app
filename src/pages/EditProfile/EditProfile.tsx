import { useContext } from 'react';
import { LanguageContext } from '../../App';
import EditBox from '../../components/EditBox/EditBox';

import './EditProfile.scss';

function EditProfile() {
	const lang = useContext(LanguageContext);
	return (
		<div className='editprofile'>
			<h1 className='editprofile-title'>{lang['edit-profile'].title}</h1>
			<EditBox />
		</div>
	);
}

export default EditProfile;
