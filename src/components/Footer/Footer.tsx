import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../App';
import logo from '../../assets/logo.png';
import mail from '../../assets/mail.svg';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import twitter from '../../assets/twitter.svg';
import './Footer.scss';

function decodeHtml(html: string) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
}

function Footer({ language, setLanguage }: any) {
	const lang = useContext(LanguageContext);
	return (
		<div className='footer'>
			<div className='footer-grid'>
				<div className='footer-grid-item item-a'>
					<img src={logo} className='logo' alt='logo' />
				</div>
				<div className='footer-grid-item item-b'>
					<div>
						<h1 className='footer-header'>{lang.footer.product}</h1>
						<div className='footer-list'>
							<Link className='footer-list-item' to='/'>
								{lang.footer.features}
							</Link>
							<Link className='footer-list-item' to='/'>
								{lang.footer.pricing}
							</Link>
						</div>
					</div>
					<div>
						<h1 className='footer-header'>{lang.footer.resources}</h1>
						<div className='footer-list'>
							<Link className='footer-list-item' to='/'>
								{lang.footer.blog}
							</Link>
							<Link className='footer-list-item' to='/'>
								{lang.footer.webinars}
							</Link>
						</div>
					</div>
					<div>
						<h1 className='footer-header'>{lang.footer.company}</h1>
						<div className='footer-list'>
							<Link className='footer-list-item' to='/'>
								{lang.footer['about-us']}
							</Link>
							<Link className='footer-list-item' to='/'>
								{lang.footer['contacts-us']}
							</Link>
						</div>
					</div>
				</div>
				<div className='footer-grid-item item-c'>
					<h1 className='footer-header footer-header-subscribe'>
						{lang.footer['subscribe-1']}
					</h1>
					<p className='footer-list-item'>{lang.footer['subscribe-2']}</p>
					<form className='footer-form'>
						<div className='footer-input-box'>
							<input
								className='footer-input'
								type='email'
								name='email'
								id='email'
								placeholder={lang.footer['email-placeholder']}
							/>
							<img className='footer-input-icon' src={mail} alt='' />
						</div>
						<button className='button-prime footer-button'>
							{lang.footer.subscribe}
						</button>
					</form>
				</div>
				<hr className='footer-hr' />
				<div className='footer-bottom-item footer-language item-d'>
					<select name='language' id='language'>
						<option value='English'>English</option>
					</select>
				</div>
				<div className='footer-bottom-item item-e'>
					{decodeHtml(lang.footer.copyright)}
					{new Date().getFullYear()} {lang.footer.privacy}
				</div>
				<div className='footer-bottom-item item-f'>
					<Link className='footer-media-link' to=''>
						<img className='footer-media-icon' src={twitter} alt='' />
					</Link>
					<Link className='footer-media-link' to=''>
						<img className='footer-media-icon' src={facebook} alt='' />
					</Link>
					<Link className='footer-media-link' to=''>
						<img className='footer-media-icon' src={youtube} alt='' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
