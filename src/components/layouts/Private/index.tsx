import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';
// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Private = () => (
	<main className='relative h-screen w-full  overflow-scroll '>
		<Navigation />
		<section className='mx-auto max-w-8xl'>
			<Outlet />
		</section>
	</main>
);

export default Private;
