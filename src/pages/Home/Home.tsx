import { useContext } from 'react';
import { LanguageContext } from '../../App';

import dots from '../../assets/dots.svg';
import circle from '../../assets/circle.svg';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
	const lang = useContext(LanguageContext);
	return (
		<div className='home'>
			<h1 className='home-title'>{lang.home.title}</h1>
			<p className='home-description'>{lang.home.description}</p>
			<div className='home-video-outline'>
				<iframe
					className='home-video'
					src='https://www.youtube.com/embed/GpcaJQ40q1Y?controls=0&mute=1&autoplay=1&rel=0&loop=1&playlist=GpcaJQ40q1Y&controls=0&showinfo=0'
					title='YouTube video player'
				></iframe>
			</div>
			<div className='join-us-container'>
				<span className='join-us-oval'></span>
				<img className='join-us-dots-left' src={dots} alt='' />
				<img className='join-us-dots-right' src={dots} alt='' />
				<img className='join-us-circle' src={circle} alt='' />
				<div>
					<h1 className='join-us-title'>{lang.home['join-us']}</h1>
					<p className='join-us-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
						tempore necessitatibus officiis dolorem impedit, culpa similique
						pariatur ipsum fugiat ullam.
					</p>
					<Link className='join-us-link' to='/join-us'>
						<button className='button-prime join-us-button'>
							{lang.home['join-us']}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
