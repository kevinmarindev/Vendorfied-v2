import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import Logo from 'assets/img/vendorfied-1.png';

import { Avatar } from 'components/ui/Avatar';

export const Navigation = ({ mobileMenu, setMobileMenu }: NavigationProps) => {
	return (
		<Disclosure
			as='nav'
			className='bg-white/[.50] border-primary border-b-8 shadow sticky top-0 z-50 '
		>
			{({ open }) => (
				<>
					<div className='px-4'>
						<div className='flex h-16 justify-between'>
							<div className='flex'>
								<div className='flex flex-shrink-0 items-center'>
									<img className='block h-8 w-auto lg:hidden' src={Logo} alt='Vendorfied' />
									<img className='hidden h-8 w-auto lg:block' src={Logo} alt='Vendorfied' />
								</div>
							</div>
							<div className='hidden sm:ml-6 sm:flex sm:items-center '>
								<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
									<Link
										to='/dashboard'
										className='inline-flex items-center border-b-2 px-1 pt-1 font-medium text-gray-900'
									>
										Dashboard
									</Link>
									<Link
										to='/documents'
										className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
									>
										Documents
									</Link>
									<Link
										to='/vendors'
										className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
									>
										Vendors
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
													<a
														href='#'
														className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
							<div className='-mr-2 flex items-center sm:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>
									<span className='sr-only'>Open main menu</span>
									{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 pt-2 pb-3'>
							{/* Current: "bg-gray-50 border-gray-500 text-gray-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-gray-500 bg-gray-50 py-2 pl-3 pr-4 text-base font-medium text-gray-700'
							>
								Dashboard
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
							>
								Team
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
							>
								Projects
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
							>
								Calendar
							</Disclosure.Button>
						</div>
						<div className='border-t border-gray-200 pt-4 pb-3'>
							<div className='mt-3 space-y-1'>
								<Disclosure.Button
									as='a'
									href='#'
									className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
								>
									Your Profile
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='#'
									className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
								>
									Settings
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='#'
									className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
								>
									Sign out
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export interface NavigationProps {
	mobileMenu: boolean;
	setMobileMenu: (value: boolean) => void;
}

export default Navigation;
