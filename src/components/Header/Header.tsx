import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	selectEmail,
	selectIsAuth,
	selectUsername,
} from '../../store/user/selectors';
import { LanguageContext } from '../../App';
import { UserActionTypes } from '../../store/user/types';

import logo from '../../assets/logo.png';
import menu from '../../assets/menu.svg';
import cross from '../../assets/cross.svg';
import leave from '../../assets/leave.svg';

import Avatar from '../Avatar/Avatar';
import UserCard from '../UserCard/UserCard';
import './Header.scss';

function Header() {
	const { pathname } = useLocation();
	const isAuth = useSelector(selectIsAuth);
	const email = useSelector(selectEmail);
	const username = useSelector(selectUsername);
	const dispatch = useDispatch();
	const [hidden, setHidden] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const lang = useContext(LanguageContext);
	const handleSignOut = () => {
		dispatch({ type: UserActionTypes.LOGOUT_USER });
	};
	useEffect(() => {
		if (isAuth) {
			dispatch({ type: UserActionTypes.GET_USER });
		}
	}, [isAuth]);
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
						<div className='sidebar-user-card'>
							{isAuth && (
								<div className='header-dropdown-user'>
									<button className='header-dropdown-avatar'>
										<Avatar />
									</button>
									<div className='header-dropdown-user-data'>
										<p className='header-dropdown-username'>{username}</p>
										<p className='header-dropdown-email'>{email}</p>
									</div>
								</div>
							)}
							<img
								onClick={() => setHidden(!hidden)}
								className='sidebar-icon cross'
								src={cross}
								alt=''
							/>
						</div>
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
			) &&
				(isAuth ? (
					<div className={hidden ? '' : 'hidden'}>
						<div className={dropDown ? 'header-hidden' : 'header-user'}>
							<span>{username}</span>
							<button
								onClick={() => setDropDown(!dropDown)}
								className='button-avatar'
							>
								<Avatar />
							</button>
						</div>
						<div className={dropDown ? 'header-dropdown' : 'header-hidden'}>
							<UserCard
								dropDown={dropDown}
								setDropDown={setDropDown}
								handleSignOut={handleSignOut}
							/>
						</div>
						<div className='header-dropdown-logout dropdown-hidden'>
							<button className='header-dropdown-button'>
								<img
									className='dropdown-image dropdown-image-leave'
									src={leave}
									alt=''
									onClick={handleSignOut}
								/>
								{lang.header['sign-out']}
							</button>
						</div>
					</div>
				) : (
					<div>
						<div
							className={hidden ? 'header-buttons' : 'header-buttons  hidden'}
						>
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
					</div>
				))}
		</nav>
	);
}

export default Header;
