import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';
import menu from '../../assets/menu.svg';
import cross from '../../assets/cross.svg';
import { LanguageContext } from '../../App';
import './Header.scss';

function Header() {
	const { pathname } = useLocation();
	const [hidden, setHidden] = useState(false);
	const lang = useContext(LanguageContext);
	return (
		<nav className={hidden ? 'sidebar' : 'header'}>
			<div className='sidebar-top'>
				<div className='sidebar-icons'>
					{!hidden ? (
						<img
							onClick={() => setHidden(!hidden)}
							className='sidebar-icon'
							src={menu}
							alt=''
						/>
					) : (
						<img
							onClick={() => setHidden(!hidden)}
							className='sidebar-icon'
							src={cross}
							alt=''
						/>
					)}
				</div>
				<Link className={hidden ? 'hidden' : 'logo'} to='/'>
					<img className='logo' src={logo} alt='logo' />
				</Link>
			</div>
			<div className={hidden ? 'header-menu' : 'header-menu hidden'}>
				<Link
					className={
						pathname.includes('/blog')
							? 'header-menu-item selected'
							: 'header-menu-item'
					}
					to={'/blog'}
				>
					{lang.header.blog}
				</Link>
				<Link
					className={
						pathname.includes('/pricing')
							? 'header-menu-item selected'
							: 'header-menu-item'
					}
					to={'/pricing'}
				>
					{lang.header.pricing}
				</Link>
				<Link
					className={
						pathname.includes('/aboutus')
							? 'header-menu-item selected'
							: 'header-menu-item'
					}
					to={'/aboutus'}
				>
					{lang.header['about-us']}
				</Link>
			</div>
			{!['join-us', 'registration', 'registration-verification', 'login'].some(
				(el) => pathname.includes(el)
			) && (
				<div className={hidden ? 'header-buttons' : 'header-buttons  hidden'}>
					<Link
						className='header-button-sign-in header-button'
						type='button'
						to='/join-us'
					>
						{lang.header['join-us']}
					</Link>
					<Link
						className='button-prime header-button'
						type='button'
						to='/login'
					>
						{lang.header['sign-in']}
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Header;
