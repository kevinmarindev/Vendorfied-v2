import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Private  from 'components/layouts/Private';
import Dashboard from './Dashboard';

export const AuthenticatedApp = () => {

	return (
		<Routes>
			<Route path='/' element={<Private />}>
				<Route path='/' element={<Dashboard />} />
				<Route path='*' element={<div>Warning</div>} />
			</Route>
		</Routes>
	);
};

export default AuthenticatedApp;
