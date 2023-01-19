import { fetchUser } from 'api/user';

import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Public } from 'components/layouts/Public';
import LoadingScreen from 'components/ui/LoadingScreen';

import AuthenticatedApp from './AuthenticatedApp';
import Login from './Login';

export const PreauthenticatedApp = () => {
	const { data: user } = useQuery({
		queryKey: ['user'],
		queryFn: fetchUser,
		onSettled(data, error) {
			console.log(data, error);
		}
	});

	// * Dynamically create accessible routes
	let basePathComponent: React.ReactNode;

	if (!!user) basePathComponent = <AuthenticatedApp />;
	else
		basePathComponent = (
			<Routes>
				<Route path='*' element={<Public />}>
					<Route path='*' element={<Login />} />
				</Route>
			</Routes>
		);

	return (
		<Suspense fallback={<LoadingScreen message='Loading...' />}>
			<Routes>
				<Route path='*' element={basePathComponent} />
			</Routes>
		</Suspense>
	);
};

export default PreauthenticatedApp;
