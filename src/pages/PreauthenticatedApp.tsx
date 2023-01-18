import { fetchUser } from 'api/user';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoadingScreen from 'components/ui/LoadingScreen';

import AuthenticatedApp from './AuthenticatedApp';
import Home from './Home';
import Login from './Login';

export const PreauthenticatedApp = () => {
	const { status } = fetchUser();

	// * Dynamically create accessible routes
	let basePathComponent: React.ReactNode;
	if (status === 'loading') basePathComponent = <LoadingScreen message='Loading...' />;
	else if (status === 'success') basePathComponent = <AuthenticatedApp />;
	else
		basePathComponent = (
			<Routes>
				<Route path='*' element={<Login />} />
			</Routes>
		);

	return (
		<Suspense fallback={<LoadingScreen message='Loading...' />}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Login' element={<Login />} />

				<Route path='*' element={basePathComponent} />
			</Routes>
		</Suspense>
	);
};

export default PreauthenticatedApp;
