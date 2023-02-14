import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export const Public = () => {
	return (
		<main className='relative h-screen w-full   '>
			<Navigation />
			<section className='mx-auto max-w-8xl'>
				<Outlet />
			</section>
		</main>
	);
};

export default Public;
