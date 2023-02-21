import { Outlet } from 'react-router-dom';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import Logo from 'assets/img/vendorfied.png';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Auth = () => (
	<div className='flex h-screen w-screen overflow-scroll'>
		<div className='mx-auto flex h-screen w-1/2 items-center justify-center bg-gradient-to-br from-blue-500/[.7] to-emerald-400/[.7]'>
			<img src={Logo} alt='vendorfied' className='h-90' />
		</div>

		<div className='h-screen w-1/2'>
			<Outlet />
		</div>
	</div>
);

export default Auth;
