import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { logout as logoutApi } from 'api/user';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import Logo from 'assets/img/vendorfied-1.png';

import Avatar from 'components/ui/Avatar';
import { Button } from 'components/ui/Inputs/Button';

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
							{location.pathname === '/register' ? null : (
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
											className={variants[location.pathname.startsWith('/about') ? 'current' : 'notCurrent']}
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
											className={
												variants[location.pathname.startsWith('/register') ? 'current' : 'notCurrent']
											}
										>
											<Button
												onClick={() => navigate('/register')}
												className={
													variants[location.pathname.startsWith('/Register') ? 'current' : 'notCurrent']
												}
												variant='solid'
												color='brand'
												type='submit'
											>
												Sign Up
											</Button>
										</Link>
										<Link
											to='/login'
											className={variants[location.pathname.startsWith('/login') ? 'current' : 'notCurrent']}
										>
											Login
										</Link>
									</div>
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
