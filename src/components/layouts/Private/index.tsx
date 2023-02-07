import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export const Private = () => (
	<main className='h-screen overflow-scroll w-full  relative '>
		<Navigation />
		<section className='max-w-8xl mx-auto'>
			<Outlet />
		</section>
	</main>
);

export default Private;
