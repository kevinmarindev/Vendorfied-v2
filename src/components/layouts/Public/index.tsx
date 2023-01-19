import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Public = () => {
	return (
		<div className='w-screen h-screen flex'>
			<div className='w-1/2 h-screen bg-gradient-to-br from-blue-500/[.7] to-emerald-400/[.7]'></div>
			<div className='w-1/2 h-screen'>
				<Outlet />
			</div>
		</div>
	);
};
