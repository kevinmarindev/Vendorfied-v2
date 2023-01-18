import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export const Private = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<main className='h-screen overflow-scroll w-full  relative '>
			{/* Main content */}
			<Navigation mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
			{/* Primary column */}
			<section>
				<Outlet />
			</section>
		</main>
	);
};

export default Private;
