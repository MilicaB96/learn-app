import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../store/user/selectors';

export default function PublicRoute({ children }: any) {
	const auth = useSelector(selectIsAuth);
	return !auth ? children : <Navigate to='/' />;
}
