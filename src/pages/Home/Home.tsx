import { useSelector } from 'react-redux';
import GuestHome from './GuestHome';
import { selectIsAuth } from '../../store/user/selectors';
import UserHome from './UserHome';

function Home() {
	const isAuth = useSelector(selectIsAuth);
	return isAuth ? <UserHome /> : <GuestHome />;
}

export default Home;
