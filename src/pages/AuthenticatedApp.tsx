import { Route, Routes } from 'react-router-dom';

import Private from 'components/layouts/Private';

import Dashboard from './Dashboard';
import Documents from './Documents';
import Groups from './Documents/Groups';
import NewAccount from './NewAccount';
import NewVendor from './NewVendor';
import Vendors from './Vendors';

export const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route path='/' element={<Private />}>
				<Route path='/' element={<Dashboard />} />
				<Route path='/documents' element={<Documents />} />
				<Route path='/documents/groups' element={<Groups />} />
				<Route path='/vendors' element={<Vendors />} />
				<Route path='/newVendor' element={<NewVendor />} />
				<Route path='/newAccount' element={<NewAccount />} />
				<Route path='*' element={<div>Warning</div>} />
			</Route>
		</Routes>
	);
};

export default AuthenticatedApp;
