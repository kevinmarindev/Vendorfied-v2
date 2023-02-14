import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================

export const Public = () => {
	return (
    // <main className='relative h-screen w-full  overflow-scroll '>
    <main >
		<Navigation />
		<section className='m-3'>
			<Outlet />
		</section>
	</main>
	);
};
