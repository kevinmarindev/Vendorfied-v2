import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export const Public = () => {
	return (
		// <div className='flex h-screen w-screen overflow-scroll'>
		// 	<div className='h-screen w-1/2 bg-gradient-to-br from-blue-500/[.7] to-emerald-400/[.7]'></div>
		// 	<div className='h-screen w-full'></div>
		// </div>
		<main className='relative h-screen w-full   '>
			<Navigation />
			<section className='mx-auto max-w-8xl'>
				<Outlet />
			</section>
		</main>
	);
};
