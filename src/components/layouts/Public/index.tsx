import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';
// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================

export const Public = () => {
	return (
		// <main className='relative h-screen w-full '>
		<main className='m-3'>
			<Navigation />
			<section className='mx-auto'>
				<Outlet />
			</section>
		</main>
	);
};

export default Public;
