import React, { useState } from 'react';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Button } from 'components/ui/Inputs/Button';

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
			'Password must contain at least one uppercase letter, one lowercase letter, and one number.'
		),
	confirmPassword: Yup.string()
		.required('Required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const Register = () => {
	const [open, setOpen] = useState(false);
	// const [selected, setSelected] = useState([1,2,3]);
	const [continued, setContinued] = useState(false);
	const [next, setNext] = useState(false);

	return (
		<div className='flex min-h-screen items-center rounded-3xl bg-gradient-to-br from-brandBlue/[.1] to-brandGreen/[.1]'>
			{!continued ? (
				<div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
					{/* Grid Layout */}
					<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20'>
						{/* column 1 */}
						<div className='space-y-6 md:my-44'>
							<h1 className='text-4xl font-bold text-brandBlue sm:text-4xl'>Welcome</h1>
							<h2 className='text-2xl font-bold sm:text-5xl'>Select your Vendorfied plan</h2>
							<p className='text-base text-gray-500 sm:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing
								amet. Euismod elit, vel tellus, sed in sapien.
							</p>
							<div className='space-y-4'>
								<details>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											{open ? '-' : '+'}
										</span>
										<span>How do I cancel my subscription?</span>
									</summary>
									<div className='px-4 py-2'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</details>
								<details>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											{open ? '-' : '+'}
										</span>
										<span>How do I cancel my subscription?</span>
									</summary>
									<div className='px-4 py-2'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</details>
								<details>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											{open ? '-' : '+'}
										</span>
										<span>How do I cancel my subscription?</span>
									</summary>
									<div className='px-4 py-2'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</details>
							</div>
						</div>
						{/* column 2 */}
						<div className='space-y-6 md:space-y-8 '>
							<div className='rounded-lg bg-white shadow hover:cursor-pointer'>
								<div className='px-6 py-8'>
									<div className='mb-4 flex items-center'>
										<input type='checkbox' className='mr-4 h-5 w-5 ' />
										<h3 className='text-4xl font-bold'>Starter</h3>
										<p className='mx-auto text-2xl'>$20/mo.</p>
									</div>
									<p className='text-md text-gray-500'>
										Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
										ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
										sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
										adipiscing amet. Euismod elit, vel tellus, sed in sapien..
									</p>
								</div>
							</div>
							<div className='rounded-lg bg-white shadow hover:cursor-pointer'>
								<div className='px-6 py-8'>
									<div className='mb-4 flex items-center'>
										<input type='checkbox' className='mr-4 h-5 w-5' />
										<h3 className='text-4xl font-bold'>Standard</h3>
										<p className='mx-auto text-2xl'>$40/mo.</p>
									</div>
									<p className='text-md text-gray-500'>
										Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
										ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
										sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
										adipiscing amet. Euismod elit, vel tellus, sed in sapien..
									</p>
								</div>
							</div>
							<div className='rounded-lg bg-white shadow hover:cursor-pointer'>
								<div className='px-6 py-8'>
									<div className='mb-4 flex items-center'>
										<input type='checkbox' className='mr-4 h-5 w-5' />
										<h3 className='text-4xl font-bold'>Pro</h3>
										<p className='mx-auto text-2xl'>$100/mo.</p>
									</div>
									<p className='text-md text-gray-500'>
										Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
										ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
										sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
										adipiscing amet. Euismod elit, vel tellus, sed in sapien..
									</p>
								</div>
							</div>
							<Button
								className='w-full bg-gradient-to-r from-brandBlue to-brandGreen '
								onClick={() => setContinued(true)}
							>
								<p className='text-xl text-white'>Continue</p>
							</Button>
						</div>
					</div>
				</div>
			) : (
				continued && (
					<div className='mx-auto max-w-7xl rounded-3xl bg-white px-4 py-16 sm:w-full sm:px-6 lg:w-1/4 lg:px-8 '>
						<div>
							<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create an account</h2>
						</div>
						<Formik
							initialValues={{
								email: '',
								password: '',
								confirmPassword: ''
							}}
							validationSchema={SignupSchema}
							onSubmit={(values) => {
								console.log(values);
							}}
						>
							{({ errors, touched }) => (
								<Form className='mt-8 space-y-6'>
									<div className='-space-y-px rounded-md shadow-sm'>
										<div>
											<label htmlFor='email' className='sr-only'>
												Email address
											</label>
											<Field
												id='email'
												name='email'
												type='email'
												autoComplete='email'
												required
												className={
													'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
													(errors.email && touched.email
														? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
														: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
												}
												placeholder='Email address'
											/>
											{/* <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 mt-1 text-sm"
                          /> */}
										</div>
										<div className='mt-4'>
											<label htmlFor='password' className='sr-only'>
												Password
											</label>
											<Field
												id='password'
												name='password'
												type='password'
												autoComplete='current-password'
												required
												className={
													'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
													(errors.password && touched.password
														? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
														: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
												}
												placeholder='Password'
											/>
											{/* <ErrorMessage
                          ame="password"
                          omponent="div"
                          lassName="text-red-500 mt-1 text-sm"
                          > */}
										</div>
										<div className='mt-4'>
											<label htmlFor='confirmPassword' className='sr-only'>
												Confirm Password
											</label>
											<Field
												id='confirmPassword'
												name='confirmPassword'
												type='password'
												autoComplete='current-password'
												required
												className={
													'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
													(errors.confirmPassword && touched.confirmPassword
														? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
														: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
												}
												placeholder='Confirm Password'
											/>
											{/* <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="text-red-500 mt-1 text-sm"
                          /> */}
										</div>
									</div>
									<p>
										*Password must be at least 8 characters and include at least 1 number and special
										character.
									</p>
									<div className='flex items-center justify-between'>
										<div className='text-sm'>
											<a href='#' className='hover:text-brandGreen-600 font-medium text-brandGreen'>
												Forgot password?
											</a>
										</div>
										<div>
											<button
												onClick={() => {
													setNext(true);
												}}
												type='submit'
												className='hover:bg-brandGreen-600 group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-brandBlue to-brandGreen py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-brandGreen focus:ring-offset-2'
											>
												Next
											</button>
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				)
			)}
		</div>
	);
};
