import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export const Private = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<div className='h-screen flex overflow-scroll w-full bg-zinc-100'>
			<Navigation mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

			{/* Content area */}
			<div className='flex-1 dark:bg-zinc-900 h-screen overflow-hidden'>
				{/* Main content */}
				<main className='overflow-hidden bg-gray-100'>
					{/* <MobileHeader setMobileMenu={setMobileMenu} /> */}
					{/* Primary column */}
					<section>{<Outlet />}</section>
				</main>
			</div>
		</div>
	);
};

export default Private;
