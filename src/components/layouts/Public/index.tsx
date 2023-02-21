import { Outlet } from 'react-router-dom';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import Navigation from './Navigation';


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
