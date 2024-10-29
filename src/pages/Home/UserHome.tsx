import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectFirstName } from '../../store/user/selectors';
import { LanguageContext } from '../../App';
import picture1 from '../../assets/home/picture1.jpg';
import picture2 from '../../assets/home/picture2.jpg';
import picture3 from '../../assets/home/picture3.jpg';

import './UserHome.scss';
import Box from '../../components/Box/Box';

function UserHome() {
	const lang = useContext(LanguageContext);
	const firstName = useSelector(selectFirstName);
	return (
		<div className='home'>
			<div className='home-greeting'>
				<h1 className='home-title'>
					{lang.userHome.greeting}, {firstName}!
				</h1>
				<p className='home-message'>{lang.userHome.message}</p>
			</div>
			<div>
				<h2 className='home-new'>{lang.userHome.whatsnew}</h2>
				<p className='home-new-description'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ullam
					cumque vitae suscipit velit vero odit earum libero repellendus
					explicabo.
				</p>
				<div className='home-box-container'>
					<Box
						image={picture1}
						tag='Lorem, ipsum.'
						title='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
						date='18/4/2024'
						timeToRead='5 minutes'
					/>
					<Box
						image={picture2}
						tag='Quasi molestiae'
						title='Eos non quod ab quam hic officiis saepe cum ipsum nobis autem!'
						date='18/4/2024'
						timeToRead='10 minutes'
					/>
					<Box
						image={picture3}
						tag='Lorem, ipsum.'
						title='A modi, harum eligendi corrupti eveniet doloribus atque maiores'
						date='18/4/2024'
						timeToRead='10 minutes'
					/>
				</div>
				<button className='button-prime home-button'>
					{lang.userHome.readmore}
				</button>
			</div>
		</div>
	);
}

export default UserHome;
