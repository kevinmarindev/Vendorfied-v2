import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Private from 'components/layouts/Private';

import Dashboard from './Dashboard';
import NewVendor from './NewVendor';
import Vendors from './Vendors';

export const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route path='/' element={<Private />}>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/documents' element={<Dashboard />} />
				<Route path='/vendors' element={<Vendors />} />
				<Route path='/newVendor' element={<NewVendor />} />
				<Route path='*' element={<div>Warning</div>} />
			</Route>
		</Routes>
	);
};

export default AuthenticatedApp;
