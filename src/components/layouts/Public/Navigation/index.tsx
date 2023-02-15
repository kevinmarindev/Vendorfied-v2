import { logout as logoutApi } from 'api/user';
// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Logo from 'assets/img/vendorfied-1.png';

import { Button } from 'components/ui/Inputs/Button';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Fragment } from 'react';
import Avatar from 'components/ui/Avatar';

export const Navigation = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutateAsync: logout } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			console.log('Logged out!');
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},
		onError: (error) => {
			console.log(error);
			queryClient.setQueryData(['user'], null);
		}
	});

	const variants = {
		current: 'inline-flex items-center border-b-2 px-1 pt-1 font-medium text-gray-900',
		notCurrent:
			'inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
	};

	return (
		<Disclosure as='nav' className=' sticky top-0 z-50 bg-white/[.50] '>
			{({ open }) => (
				<>
					<div className='mx-4'>
						<div className='flex h-16 justify-between'>
							<div className='flex'>
								<div className='flex flex-shrink-0 items-center'>
									<img className='block h-8 w-auto lg:hidden' src={Logo} alt='Vendorfied' />
									<img className='hidden h-8 w-auto lg:block' src={Logo} alt='Vendorfied' />
								</div>
							</div>
                { location.pathname === '/register' ? ( null ) : (
              <div className='hidden sm:ml-6 sm:flex sm:items-center '>
								<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
									<Link
										to='/'
										className={variants[location.pathname === '/Home' ? 'current' : 'notCurrent']}
									>
										Home
									</Link>
									<Link
										to='/about'
										className={
											variants[location.pathname.startsWith('/about') ? 'current' : 'notCurrent']
										}
									>
										About
									</Link>
									<Link
										to='/pricing'
										className={variants[location.pathname.startsWith('/pricing') ? 'current' : 'notCurrent']}
									>
										Pricing
									</Link>
									<Link
										to='/contact'
										className={variants[location.pathname.startsWith('/contact') ? 'current' : 'notCurrent']}
									>
										Contact
									</Link>
									<Link
										to='/register'
										className={variants[location.pathname.startsWith('/register') ? 'current' : 'notCurrent']}
									>
										Sign Up
									</Link>
									<Link
										to='/login'
										className={variants[location.pathname.startsWith('/login') ? 'current' : 'notCurrent']}
									>
										Login
									</Link>
								</div>
								{/* Profile dropdown */}
								<Menu as='div' className='relative ml-3'>
									<div>
										<Menu.Button className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
											<span className='sr-only'>Open user menu</span>
											<Avatar size='xs' />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter='transition ease-out duration-200'
										enterFrom='transform opacity-0 scale-95'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-75'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-95'
									>
										<Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
											<Menu.Item>
												{({ active }) => (
													<div
														className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Your Profile
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div
														className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Settings
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div
														onClick={() => logout()}
														className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Sign out
													</div>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
                )}
							<div className='-mr-2 flex items-center sm:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>
									<span className='sr-only'>Open main menu</span>
									{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
								</Disclosure.Button>
							</div> 
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};

export default Navigation;
