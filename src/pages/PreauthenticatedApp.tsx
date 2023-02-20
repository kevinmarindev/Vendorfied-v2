import { fetchUser } from 'api/user';
import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import Auth from 'components/layouts/Auth';
import Public from 'components/layouts/Public';
import LoadingScreen from 'components/ui/LoadingScreen';
import AuthenticatedApp from './AuthenticatedApp';
import LandingScreen from './LandingScreen';
import Login from './Login';
import { Register } from './Register';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
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
                <Route path='/' element={<Public />}>
                    <Route index element={<LandingScreen />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route path='*' element={<Auth />}>
                    <Route index element={<Login />} />
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