import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: any) {
	const auth = true;
	return auth ? children : <Navigate to='/login' />;
}

export default PrivateRoute;
