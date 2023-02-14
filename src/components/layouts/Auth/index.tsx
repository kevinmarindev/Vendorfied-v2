import { Outlet } from 'react-router-dom';

export const Auth = () => (
	<div className='flex h-screen w-screen overflow-scroll'>
		<div className='h-screen w-1/2 bg-gradient-to-br from-blue-500/[.7] to-emerald-400/[.7]'></div>
		<div className='h-screen w-1/2'>
			<Outlet />
		</div>
	</div>
);

export default Auth;
