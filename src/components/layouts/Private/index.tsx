import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export const Private = () => (
	<main className='h-screen overflow-scroll w-full  relative '>
		<Navigation />
		<section>
			<Outlet />
		</section>
	</main>
);

export default Private;
